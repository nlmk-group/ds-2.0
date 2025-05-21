import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as r}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as a,b as m}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as u}from"./index-Bnop-kX6.js";import{s as i,H as p,E as l}from"./Header-DoEz7EVi.js";import{F as d}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as b}from"./Properties-BySoTS4I.js";import{T as v}from"./Tests-OdO6CFav.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as f}from"./argsTypes-BkhlndGn.js";import{c as g,e as h,U as x}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626",_="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Autocomplete",A=`
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
      label="Autocomplete по умолчанию"
    />
  );
};
`,C=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState, useCallback } from 'react';

const defaultOptions = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
];

export default function WithCreateItemExample() {
  const [items, setItems] = useState(defaultOptions);
  const [selectedItem, setSelectedItem] = useState();

  const handleCreateItem = (value) => {
    const newItem = { 
      id: items.length + 1, 
      value: value.toLowerCase().replace(/\\s+/g, '_'), 
      label: value 
    };
    
    setItems(prev => [...prev, newItem]);
    setSelectedItem(newItem);
  };

  return (
    <Autocomplete
      items={items}
      selected={selectedItem}
      nameGetter={(item) => item.label || ''}
      onChange={setSelectedItem}
      onCreateItem={handleCreateItem}
      createItemText={(value) => \`Создать новый элемент: \${value}\`}
      label="Autocomplete с созданием нового элемента"
      placeholder="Введите название или создайте новый элемент"
    />
  );
}
`,S=`
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

export default function CustomTotalTextExample() {
  const [selected, setSelected] = useState();
  return (
    <Autocomplete
      items={options}
      onChange={setSelected}
      nameGetter={item => item.label || ''}
      totalText="Найдено:"
      label="Autocomplete с кастомным текстом 'Total'"
    />
  );
};
`,y=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState, useCallback } from 'react';

const defaultOptions = [
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

export default function AsyncLoadingExample() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadOptions = (query) => {
    setIsLoading(true);
    
    // Имитация запроса к API
    setTimeout(() => {
      const filteredItems = defaultOptions.filter(item => 
        item.label?.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filteredItems);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Autocomplete 
      items={items} 
      nameGetter={item => item.label || ''} 
      onChange={setSelected}
      selected={selected}
      isLoading={isLoading}
      onLoadOptions={handleLoadOptions}
      label="Autocomplete с асинхронной загрузкой данных"
      placeholder="Начните вводить для поиска..."
    />
  );
};
`,I=`
import { Autocomplete, Typography } from '@nlmk/ds-2.0';
import { useState, useCallback } from 'react';

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

export default function CustomRenderingExample() {
  const [selected, setSelected] = useState();

  const renderCustomLabel = (item) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Typography variant="Body-Medium" color="var(--spectrum-red-50)">
          ID: {item.id}
        </Typography>
        <Typography color="var(--steel-90)">{item.label}</Typography>
        <Typography variant="Caption-Medium" color="var(--steel-70)">
          ({item.value})
        </Typography>
      </div>
    );
  };

  return (
    <Autocomplete 
      items={options} 
      nameGetter={item => item.label || ''} 
      onChange={setSelected}
      selected={selected}
      renderLabel={renderCustomLabel}
      label="Autocomplete с кастомным рендерингом опций"
      showTooltip={true}
    />
  );
};
`,w=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const options = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
  { id: 3, value: 'rolling_mill', label: 'Прокатный стан' },
  { id: 4, value: 'sinter_plant', label: 'Агломерационная фабрика' },
  { id: 5, value: 'coke_plant', label: 'Коксовая батарея' }
];

export default function SizesExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={() => {}}
        size="xs"
        label="Размер XS"
      />
      
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={() => {}}
        size="s"
        label="Размер S"
      />
      
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={() => {}}
        size="m"
        label="Размер M (по умолчанию)"
      />
    </div>
  );
};
`,j=`
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

export default function PortalExample() {
  const [selected, setSelected] = useState();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={setSelected}
        selected={selected}
        withPortal={true}
        portalContainerId="root"
        label="Autocomplete с рендерингом через портал"
      />
    </div>
  );
};
`,T=`
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const options = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
  { id: 3, value: 'rolling_mill', label: 'Прокатный стан' },
  { id: 4, value: 'sinter_plant', label: 'Агломерационная фабрика' },
  { id: 5, value: 'coke_plant', label: 'Коксовая батарея' }
];

export default function EmptyDropdownExample() {
  const [selected, setSelected] = useState();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={setSelected}
        showEmptyDropdown={true}
        label="С отображением пустого дропдауна (по умолчанию)"
        noResultsText="Ничего не найдено"
      />
      
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={setSelected}
        showEmptyDropdown={false}
        label="Без отображения пустого дропдауна"
      />
    </div>
  );
};
`,k=()=>{const[t,o]=u.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(p,{title:"Autocomplete",isStable:!0,description:"Компонент Autocomplete используется для предоставления функции автозаполнения на основе введенного текста, позволяя пользователю выбирать из предложенных вариантов.",codeLink:_,figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{height:200,description:"Autocomplete по умолчанию",code:A}),e.jsx(l,{height:200,description:"Autocomplete с кастомным текстом 'Total'",code:S}),e.jsx(l,{height:200,description:"Autocomplete с асинхронной загрузкой данных",code:y}),e.jsx(l,{height:200,description:"Autocomplete с созданием нового элемента",code:C}),e.jsx(l,{height:200,description:"Autocomplete с кастомным рендерингом опций",code:I}),e.jsx(l,{height:200,description:"Autocomplete с разными размерами",code:w}),e.jsx(l,{height:200,description:"Autocomplete с рендерингом через портал",code:j}),e.jsx(l,{height:200,description:"Autocomplete с настройкой пустого дропдауна",code:T}),e.jsx(b,{argsTypes:f})]}),Number(t)===1&&e.jsx(d,{url:s}),Number(t)===2&&e.jsx(v,{componentName:"Autocomplete"})]})};function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Components/Autocomplete/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626"},jest:["Autocomplete.test.tsx"]}}),`
`,e.jsx(h,{of:c}),`
`,e.jsx(x,{children:e.jsx(k,{})})]})}function ue(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n()}export{ue as default};
