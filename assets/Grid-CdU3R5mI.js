import{r as x,j as r,m as i,S as a,U as t}from"./iframe-BPtLBEuk.js";import{useMDXComponents as n}from"./index-DY5aY42c.js";import{a as m,G as c}from"./argsTypes-6_CM8Ms-.js";import{DecoratorDefault as b}from"./Decorator.stories-Bt-6wqMy.js";import{s as u,H as k,E as d}from"./Header-lxb-Wymn.js";import{P as l}from"./Properties-u6_xeg7P.js";import{T as G}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as s}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-d_6bz31j.js";import"./clsx-B-dksMZM.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-C9_7xPUt.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const y=`import { Grid, Box } from '@nlmk/ds-2.0';

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
`,j=()=>{const[o,p]=x.useState(0);return r.jsxs("div",{className:u.wrapper,children:[r.jsx(k,{title:"Grid",description:"Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"}),r.jsx("div",{className:u.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>p(0)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(o)===1,onClick:()=>p(1)})]})}),Number(o)===0&&r.jsxs(r.Fragment,{children:[r.jsx(d,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:y}),r.jsx(d,{height:500,description:"Колонки равной ширины",code:R}),r.jsx(d,{height:500,description:"Установка ширины одной колонки",code:g}),r.jsx(d,{height:500,description:"Переменная ширина контента",code:v}),r.jsx(d,{height:500,description:"Колонки равной ширины с несколькими строками",code:C}),r.jsx(d,{height:500,description:"Вертикальное выравнивание",code:B}),r.jsx(d,{height:500,description:"Горизонтальное выравнивание",code:f}),r.jsx(d,{height:500,description:"Перенос колонок",code:w}),r.jsx(d,{height:500,description:"Разрывы колонок",code:h}),r.jsx(l,{argsTypes:m})]}),Number(o)===1&&r.jsx(G,{componentName:"Grid"})]})};function e(o){return r.jsxs(r.Fragment,{children:[r.jsx(i,{title:"Components/Grid/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]}}),`
`,r.jsx(a,{of:b}),`
`,r.jsx(t,{children:r.jsx(j,{})})]})}function lr(o={}){const{wrapper:p}={...n(),...o.components};return p?r.jsx(p,{...o,children:r.jsx(e,{...o})}):e()}export{lr as default};
