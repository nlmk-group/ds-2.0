import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as x}from"./index-D2yTtfOz.js";import"./index-B8DvOqk1.js";import{G as i}from"./index-D8WlRtvM.js";import{DecoratorDefault as a}from"./Decorator.stories-D7iJJ_iz.js";import{r as t}from"./index-BcJSXhQi.js";import{s as u,H as n,E as d}from"./Header-CiapITfv.js";import{P as m}from"./Properties-Cf3zhWaH.js";import{T as c}from"./Tests-fyb8YS1h.js";/* empty css               */import{ah as s}from"./TreeList-CvZqtDrx.js";import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import"./32-BKmqX1Rw.js";import{a as b}from"./argsTypes-YJfY3Mob.js";import{c as k,S as l,U as G}from"./DocsRenderer-CFRXHY34-By352SZU.js";import"./index-ChsGqxH_.js";import"./preview-D3PPJEDW.js";import"./iframe-Bcy3tJBh.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-oeyBqvW7.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const y=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px" st={{ width: "100%", padding: 0 }}>
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 2
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 2
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3 (шире)
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="58.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3 (шире)
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,v=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Переменная ширина контента
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Переменная ширина контента
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" width="100%" />
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="start">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="center">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="end">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="center">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="space-around">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="space-between">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="75%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-9
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-4
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Поскольку 9 + 4 = 13 &gt; 12, этот div шириной 4 колонки переносится на новую строку как единое целое.
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
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
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" width="100%" />
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,j=()=>{const[o,p]=t.useState(0);return r.jsxs("div",{className:u.wrapper,children:[r.jsx(n,{title:"Grid",description:"Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"}),r.jsx("div",{className:u.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>p(0)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(o)===1,onClick:()=>p(1)})]})}),Number(o)===0&&r.jsxs(r.Fragment,{children:[r.jsx(d,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:y}),r.jsx(d,{height:500,description:"Колонки равной ширины",code:R}),r.jsx(d,{height:500,description:"Установка ширины одной колонки",code:g}),r.jsx(d,{height:500,description:"Переменная ширина контента",code:v}),r.jsx(d,{height:500,description:"Колонки равной ширины с несколькими строками",code:C}),r.jsx(d,{height:500,description:"Вертикальное выравнивание",code:B}),r.jsx(d,{height:500,description:"Горизонтальное выравнивание",code:f}),r.jsx(d,{height:500,description:"Перенос колонок",code:w}),r.jsx(d,{height:500,description:"Разрывы колонок",code:h}),r.jsx(m,{argsTypes:b})]}),Number(o)===1&&r.jsx(c,{componentName:"Grid"})]})};function e(o){return r.jsxs(r.Fragment,{children:[r.jsx(k,{title:"Components/Grid/Info",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]}}),`
`,r.jsx(l,{of:a}),`
`,r.jsx(G,{children:r.jsx(j,{})})]})}function nr(o={}){const{wrapper:p}={...x(),...o.components};return p?r.jsx(p,{...o,children:r.jsx(e,{...o})}):e()}export{nr as default};
