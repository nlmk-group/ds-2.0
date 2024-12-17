import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as i}from"./index-CbmgEnq2.js";import{am as n,an as p,ao as c}from"./chunk-NUUEMKO5-CkiiNlyy.js";import{af as a,b as u}from"./index-ByAgZyky.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as l,H as b,E as r}from"./Header-EP2jVtSV.js";import{F as v}from"./FigmaEmbed-C-3tISD_.js";import{P as h}from"./Properties-C46i6TC6.js";import{T as x}from"./Tests-4iTQQ7zx.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as g}from"./argsTypes-uwvZam_4.js";import"./iframe-DNfwqCnh.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BiTg2p7s.js";import"./index-CT8gBKwQ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626",j=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const options = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
  { id: 3, value: 'rolling_mill', label: 'Прокатный стан' },
  { id: 4, value: 'sinter_plant', label: 'Агломерационная фабрика' },
  { id: 5, value: 'coke_plant', label: 'Коксовая батарея' },
  { id: 6, value: 'steel_ladle', label: 'Сталеразливочный ковш' },
  { id: 7, value: 'continuous_casting', label: 'Машина непрерывного литья' },
  { id: 8, value: 'electric_furnace', label: 'Электродуговая печь' },
  { id: 9, value: 'oxygen_plant', label: 'Кислородная станция' },
  { id: 10, value: 'heat_treatment', label: 'Термическая обработка' }
];

export default function App() {
  const [selected, setSelected] = useState();
  return (
    <Autocomplete
      items={options}
      onChange={setSelected}
      nameGetter={item => item.label || ''}
    />
  );
};
`,I=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const defaultOptions = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
];

export default function WithCreateItemExample() {
  const [items, setItems] = useState(defaultOptions);
  const [selectedItem, setSelectedItem] = useState();

  const handleCreateItem = (value) => {
    const newItem = { id: items.length + 1, label: value, value };
    setItems(prev => [...prev, newItem]);
    setSelectedItem(newItem);
  };

  return (
    <Autocomplete
      items={items}
      selected={selectedItem}
      nameGetter={item => item.label || ''}
      onChange={val => setSelectedItem(val)}
      onCreateItem={handleCreateItem}
      noResultsText="Нет результатов"
      createItemText={val => \`Добавить: \${val}\`}
    />
  );
};
`,A=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState, useEffect } from 'react';

export default function WithLoadMoreExample() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => ({ id: i, label: \`Option \${i}\`, value: i }))
  );

  const handleLoadMore = () => {
    setTimeout(() => {
      setItems(prev => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => ({
          id: prev.length + i,
          label: \`New Option \${prev.length + i}\`,
          value: prev.length + i
        }))
      ]);
    }, 1000);
  };

  return (
    <div style={{ height: '300px', overflow: 'auto' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={(val) => console.log('onChange', val)}
        canLoadMore={true}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};
`,C=()=>{const[t,o]=f.useState(0);return e.jsxs("div",{className:l.wrapper,children:[e.jsx(b,{title:"Autocomplete",description:"Компонент Autocomplete используется для предоставления функции автозаполнения на основе введенного текста, позволяя пользователю выбирать из предложенных вариантов.",codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Autocomplete",figmaLink:s}),e.jsx("div",{className:l.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:200,description:"Autocomplete по умолчанию",code:j}),e.jsx(r,{height:200,description:"Autocomplete с созданием нового элемента",code:I}),e.jsx(r,{height:200,description:"Autocomplete с догрузкой при скролле",code:A}),e.jsx(h,{argsTypes:g})]}),Number(t)===1&&e.jsx(v,{url:s}),Number(t)===2&&e.jsx(x,{componentName:"Autocomplete"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/Autocomplete/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626"},jest:["Autocomplete.test.tsx"]}}),`
`,e.jsx(p,{of:d}),`
`,e.jsx(c,{children:e.jsx(C,{})})]})}function re(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(m,{...t})}):m()}export{re as default};
