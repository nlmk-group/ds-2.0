import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import{ag as s,ah as v,ai as n}from"./chunk-HLWAVYOI-DvyrZeHL.js";import{G as m}from"./index-B_c816qF.js";import{DecoratorDefault as l}from"./Decorator.stories-BP3ijO2B.js";import{r as c}from"./index-DQ2WTIsS.js";import{s as i,H as t,E as o}from"./Header-Bt-oxRaL.js";import{F as x}from"./FigmaEmbed-BRi3XZKB.js";import{P as G}from"./Properties-Do0KQQZq.js";import{T as y}from"./Tests-CSfu_vhY.js";/* empty css               */import{Y as e}from"./index-BGpPsu4k.js";import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import"./index-B8KuQLf-.js";import"./index-ehXB0alm.js";import"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import"./32-CkcGOl0S.js";import{a as R}from"./argsTypes-kosTvsRS.js";import"./iframe-BX8EaEtl.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./.jest-test-results-FuqlRU2D.js";import"./index-BKbm6zW0.js";const b="https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0",g=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,k=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,B=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,f=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,w=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,h=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,j=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,A=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,N=()=>{const[a,d]=c.useState(0);return r.jsxs("div",{className:i.wrapper,children:[r.jsx(t,{title:"Grid",description:"Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid",figmaLink:b}),r.jsx("div",{className:i.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>d(0)}),r.jsx(e.Tab,{label:"Тестирование",active:Number(a)===2,onClick:()=>d(2)})]})}),Number(a)===0&&r.jsxs(r.Fragment,{children:[r.jsx(o,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:g}),r.jsx(o,{height:500,description:"Колонки равной ширины",code:k}),r.jsx(o,{height:500,description:"Установка ширины одной колонки",code:C}),r.jsx(o,{height:500,description:"Переменная ширина контента",code:B}),r.jsx(o,{height:500,description:"Колонки равной ширины с несколькими строками",code:f}),r.jsx(o,{height:500,description:"Вертикальное выравнивание",code:w}),r.jsx(o,{height:500,description:"Горизонтальное выравнивание",code:h}),r.jsx(o,{height:500,description:"Перенос колонок",code:j}),r.jsx(o,{height:500,description:"Разрывы колонок",code:A}),r.jsx(G,{argsTypes:R})]}),Number(a)===1&&r.jsx(x,{url:b}),Number(a)===2&&r.jsx(y,{componentName:"Grid"})]})};function u(a){return r.jsxs(r.Fragment,{children:[r.jsx(s,{title:"Components/Grid/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]}}),`
`,r.jsx(v,{of:l}),`
`,r.jsx(n,{children:r.jsx(N,{})})]})}function lr(a={}){const{wrapper:d}={...p(),...a.components};return d?r.jsx(d,{...a,children:r.jsx(u,{...a})}):u()}export{lr as default};
