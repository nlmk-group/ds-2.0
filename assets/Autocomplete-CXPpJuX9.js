import{r as n,j as e,m,S as p,U as c}from"./iframe-BPtLBEuk.js";import{useMDXComponents as u}from"./index-DY5aY42c.js";import{A as d}from"./index-XP-9xJyN.js";import{DecoratorDefault as b}from"./Decorator.stories-Bt-6wqMy.js";import{s as i,H as v,E as l}from"./Header-lxb-Wymn.js";import{F as f}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as g}from"./Properties-u6_xeg7P.js";import{T as h}from"./Tests-DUUoQDTR.js";import{T as a}from"./index-CX87Y9E4.js";import{a as x}from"./argsTypes-BFr6lVn-.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./index-B8NQmRXS.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Dr7AntG3.js";import"./index-D-pLh_NR.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-CDRf2h9x.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./useFloatingReferenceSync-C_yD6V-Z.js";import"./index-d_6bz31j.js";import"./index-TTLR_33A.js";import"./index-jNLleeyk.js";import"./types-TdnjS80C.js";import"./index-BGle18_j.js";import"./floating-ui.react-tm3IGrEk.js";import"./sizesMapping-D8QavrGc.js";import"./index-C1n_EcZz.js";import"./index-etTcxdeZ.js";import"./index-C1wwabMN.js";import"./index-C5OaxW6Y.js";import"./index-BABQ5Crx.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626",_="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Autocomplete",A=`
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
`,k=()=>{const[t,o]=n.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(v,{title:"Autocomplete",isStable:!0,description:"Компонент Autocomplete используется для предоставления функции автозаполнения на основе введенного текста, позволяя пользователю выбирать из предложенных вариантов.",codeLink:_,figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{height:200,description:"Autocomplete по умолчанию",code:A}),e.jsx(l,{height:200,description:"Autocomplete с кастомным текстом 'Total'",code:S}),e.jsx(l,{height:200,description:"Autocomplete с асинхронной загрузкой данных",code:y}),e.jsx(l,{height:200,description:"Autocomplete с созданием нового элемента",code:C}),e.jsx(l,{height:200,description:"Autocomplete с кастомным рендерингом опций",code:I}),e.jsx(l,{height:200,description:"Autocomplete с разными размерами",code:w}),e.jsx(l,{height:200,description:"Autocomplete с рендерингом через портал",code:j}),e.jsx(l,{height:200,description:"Autocomplete с настройкой пустого дропдауна",code:T}),e.jsx(g,{argsTypes:x})]}),Number(t)===1&&e.jsx(f,{url:s}),Number(t)===2&&e.jsx(h,{componentName:"Autocomplete"})]})};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/Autocomplete/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626"},jest:["Autocomplete.test.tsx"]}}),`
`,e.jsx(p,{of:b}),`
`,e.jsx(c,{children:e.jsx(k,{})})]})}function De(t={}){const{wrapper:o}={...u(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r()}export{De as default};
