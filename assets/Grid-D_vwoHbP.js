import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import{am as p,an as s,ao as v}from"./chunk-NUUEMKO5-zybvIu1X.js";import{G as n}from"./index-C7kuRPht.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as m}from"./index-Bnop-kX6.js";import{s as i,H as c,E as o}from"./Header-Cqd_i1aV.js";import{P as t}from"./Properties-Bv2rjfL_.js";import{T as x}from"./Tests-cYn1xz5o.js";/* empty css               */import{$ as e}from"./index-Bult1pSm.js";import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import{a as G}from"./argsTypes-Clx5v9_w.js";import"./iframe-Bqux-A90.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./.jest-test-results-DNyW-qLm.js";import"./index-CT8gBKwQ.js";const y=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,j=()=>{const[a,d]=m.useState(0);return r.jsxs("div",{className:i.wrapper,children:[r.jsx(c,{title:"Grid",description:"Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"}),r.jsx("div",{className:i.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>d(0)}),r.jsx(e.Tab,{label:"Тестирование",active:Number(a)===1,onClick:()=>d(1)})]})}),Number(a)===0&&r.jsxs(r.Fragment,{children:[r.jsx(o,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:y}),r.jsx(o,{height:500,description:"Колонки равной ширины",code:R}),r.jsx(o,{height:500,description:"Установка ширины одной колонки",code:g}),r.jsx(o,{height:500,description:"Переменная ширина контента",code:k}),r.jsx(o,{height:500,description:"Колонки равной ширины с несколькими строками",code:C}),r.jsx(o,{height:500,description:"Вертикальное выравнивание",code:B}),r.jsx(o,{height:500,description:"Горизонтальное выравнивание",code:f}),r.jsx(o,{height:500,description:"Перенос колонок",code:w}),r.jsx(o,{height:500,description:"Разрывы колонок",code:h}),r.jsx(t,{argsTypes:G})]}),Number(a)===1&&r.jsx(x,{componentName:"Grid"})]})};function b(a){return r.jsxs(r.Fragment,{children:[r.jsx(p,{title:"Components/Grid/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]}}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(v,{children:r.jsx(j,{})})]})}function ur(a={}){const{wrapper:d}={...u(),...a.components};return d?r.jsx(d,{...a,children:r.jsx(b,{...a})}):b()}export{ur as default};
