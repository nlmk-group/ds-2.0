import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import"./index-CYB2H57i.js";import{G as p}from"./index-CH_Nznxf.js";import{DecoratorDefault as s}from"./Decorator.stories-B1hjNCvN.js";import{r as v}from"./index-Bnop-kX6.js";import{s as i,H as n,E as o}from"./Header-BIXWiZL1.js";import{P as l}from"./Properties-BJfkkXUE.js";import{T as m}from"./Tests-0MM5H8rT.js";/* empty css               */import{ag as e}from"./TreeList-BlowYYWI.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as c}from"./argsTypes-B6wsDyya.js";import{c as t,e as x,U as G}from"./DocsRenderer-CFRXHY34-xGBwJgAN.js";import"./preview-yGuw84d4.js";import"./iframe-DdMYiHlZ.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./.jest-test-results-Cto72PH8.js";import"./index-D0sJu8id.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const y=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,R=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,g=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,k=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,C=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,B=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,f=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,w=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,j=()=>{const[a,d]=v.useState(0);return r.jsxs("div",{className:i.wrapper,children:[r.jsx(n,{title:"Grid",description:"Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"}),r.jsx("div",{className:i.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>d(0)}),r.jsx(e.Tab,{label:"Тестирование",active:Number(a)===1,onClick:()=>d(1)})]})}),Number(a)===0&&r.jsxs(r.Fragment,{children:[r.jsx(o,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:y}),r.jsx(o,{height:500,description:"Колонки равной ширины",code:R}),r.jsx(o,{height:500,description:"Установка ширины одной колонки",code:g}),r.jsx(o,{height:500,description:"Переменная ширина контента",code:k}),r.jsx(o,{height:500,description:"Колонки равной ширины с несколькими строками",code:C}),r.jsx(o,{height:500,description:"Вертикальное выравнивание",code:B}),r.jsx(o,{height:500,description:"Горизонтальное выравнивание",code:f}),r.jsx(o,{height:500,description:"Перенос колонок",code:w}),r.jsx(o,{height:500,description:"Разрывы колонок",code:h}),r.jsx(l,{argsTypes:c})]}),Number(a)===1&&r.jsx(m,{componentName:"Grid"})]})};function b(a){return r.jsxs(r.Fragment,{children:[r.jsx(t,{title:"Components/Grid/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]}}),`
`,r.jsx(x,{of:s}),`
`,r.jsx(G,{children:r.jsx(j,{})})]})}function sr(a={}){const{wrapper:d}={...u(),...a.components};return d?r.jsx(d,{...a,children:r.jsx(b,{...a})}):b()}export{sr as default};
