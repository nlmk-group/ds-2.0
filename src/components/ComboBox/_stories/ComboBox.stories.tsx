import React, { useCallback, useState } from 'react';

import styles from './ComboBox.module.scss';

import { Provider } from '../context';
import { ComboBox, ComboDraggableList, ComboGroupList, ComboList, ComboTreeList } from '../index';
import { IComboBoxGroupOption, IComboBoxOption } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/ComboBox/Stories',
  component: ComboBox,
  argTypes: argsTypes,
  decorators: [
    (Story: any) => (
      <Provider>
        <Story />
      </Provider>
    ),
    withWrapper
  ]
};

const simpleOptions: IComboBoxOption[] = [
  { id: '1', label: 'Сталь углеродистая' },
  { id: '2', label: 'Сталь легированная' },
  { id: '3', label: 'Чугун серый' },
  { id: '4', label: 'Чугун ковкий' },
  { id: '5', label: 'Алюминиевые сплавы' },
  { id: '6', label: 'Медные сплавы' }
];

const groupOptions: IComboBoxGroupOption[] = [
  { id: 'g1', label: 'Сталь', groupId: 'g1', groupLabel: 'Сталь' },
  { id: '1', label: 'Сталь 3', groupId: 'g1', groupLabel: 'Сталь', tooltipDescription: 'Ст3сп ГОСТ 380-2005' },
  { id: '2', label: 'Сталь 20', groupId: 'g1', groupLabel: 'Сталь', tooltipDescription: 'Ст20 ГОСТ 1050-2013' },
  { id: '3', label: 'Сталь 45', groupId: 'g1', groupLabel: 'Сталь', tooltipDescription: 'Ст45 ГОСТ 1050-2013' },

  { id: 'g2', label: 'Чугун', groupId: 'g2', groupLabel: 'Чугун' },
  { id: '4', label: 'СЧ 15', groupId: 'g2', groupLabel: 'Чугун', tooltipDescription: 'Серый чугун СЧ15 ГОСТ 1412-85' },
  { id: '5', label: 'СЧ 20', groupId: 'g2', groupLabel: 'Чугун', tooltipDescription: 'Серый чугун СЧ20 ГОСТ 1412-85' },
  {
    id: '6',
    label: 'ВЧ 40',
    groupId: 'g2',
    groupLabel: 'Чугун',
    tooltipDescription: 'Высокопрочный чугун ВЧ40 ГОСТ 7293-85'
  },

  { id: 'g3', label: 'Цветные металлы', groupId: 'g3', groupLabel: 'Цветные металлы' },
  {
    id: '7',
    label: 'АЛ2',
    groupId: 'g3',
    groupLabel: 'Цветные металлы',
    tooltipDescription: 'Алюминиевый литейный сплав АЛ2 ГОСТ 1583-93'
  },
  {
    id: '8',
    label: 'ЛС59-1',
    groupId: 'g3',
    groupLabel: 'Цветные металлы',
    tooltipDescription: 'Латунь свинцовая ЛС59-1 ГОСТ 15527-2004'
  },
  {
    id: '9',
    label: 'БрА9Ж3Л',
    groupId: 'g3',
    groupLabel: 'Цветные металлы',
    tooltipDescription: 'Бронза алюминиевая БрА9Ж3Л ГОСТ 493-79'
  }
];

const treeOptions = [
  {
    id: '1',
    label: 'Прокат черных металлов',
    children: [
      {
        id: '2',
        label: 'Сортовой прокат',
        children: [
          {
            id: '3',
            label: 'Круг стальной',
            children: [
              { id: '19', label: 'Круг стальной горячекатаный' },
              { id: '20', label: 'Круг стальной калиброванный' },
              { id: '21', label: 'Круг стальной легированный' }
            ]
          },
          {
            id: '4',
            label: 'Квадрат стальной',
            children: [
              { id: '22', label: 'Квадрат стальной горячекатаный' },
              { id: '23', label: 'Квадрат стальной калиброванный' }
            ]
          },
          {
            id: '5',
            label: 'Шестигранник',
            children: [
              { id: '24', label: 'Шестигранник стальной горячекатаный' },
              { id: '25', label: 'Шестигранник стальной калиброванный' }
            ]
          }
        ]
      },
      {
        id: '6',
        label: 'Листовой прокат',
        children: [
          {
            id: '7',
            label: 'Лист горячекатаный',
            children: [
              { id: '26', label: 'Лист горячекатаный тонкий (до 4 мм)' },
              { id: '27', label: 'Лист горячекатаный толстый (от 4 мм)' },
              { id: '28', label: 'Лист горячекатаный рифленый' }
            ]
          },
          {
            id: '8',
            label: 'Лист холоднокатаный',
            children: [
              { id: '29', label: 'Лист холоднокатаный тонкий' },
              { id: '30', label: 'Лист холоднокатаный высокой точности' }
            ]
          },
          {
            id: '9',
            label: 'Лист оцинкованный',
            children: [
              { id: '31', label: 'Лист оцинкованный матовый' },
              { id: '32', label: 'Лист оцинкованный глянцевый' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '10',
    label: 'Прокат цветных металлов',
    children: [
      {
        id: '11',
        label: 'Алюминиевый прокат',
        children: [
          {
            id: '12',
            label: 'Лист алюминиевый',
            children: [
              { id: '33', label: 'Лист алюминиевый рифленый' },
              { id: '34', label: 'Лист алюминиевый гладкий' },
              { id: '35', label: 'Лист алюминиевый дюралевый' }
            ]
          },
          {
            id: '13',
            label: 'Труба алюминиевая',
            children: [
              { id: '36', label: 'Труба алюминиевая круглая' },
              { id: '37', label: 'Труба алюминиевая квадратная' },
              { id: '38', label: 'Труба алюминиевая профильная' }
            ]
          },
          {
            id: '14',
            label: 'Профиль алюминиевый',
            children: [
              { id: '39', label: 'Профиль алюминиевый стандартный' },
              { id: '40', label: 'Профиль алюминиевый конструкционный' },
              { id: '41', label: 'Профиль алюминиевый анодированный' }
            ]
          }
        ]
      },
      {
        id: '15',
        label: 'Медный прокат',
        children: [
          {
            id: '16',
            label: 'Лист медный',
            children: [
              { id: '42', label: 'Лист медный мягкий' },
              { id: '43', label: 'Лист медный твердый' },
              { id: '44', label: 'Лист медный полутвердый' }
            ]
          },
          {
            id: '17',
            label: 'Труба медная',
            children: [
              { id: '45', label: 'Труба медная отожженная' },
              { id: '46', label: 'Труба медная капиллярная' },
              { id: '47', label: 'Труба медная тонкостенная' }
            ]
          },
          {
            id: '18',
            label: 'Пруток медный',
            children: [
              { id: '48', label: 'Пруток медный круглый' },
              { id: '49', label: 'Пруток медный квадратный' },
              { id: '50', label: 'Пруток медный шестигранный' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '51',
    label: 'Метизная продукция'
  },
  {
    id: '52',
    label: 'Трубный прокат',
    children: [
      {
        id: '53',
        label: 'Трубы стальные'
      },
      {
        id: '57',
        label: 'Трубы нержавеющие'
      }
    ]
  }
];

const tooltipItems: IComboBoxOption[] = [
  { id: 't1', label: 'Подсказка 1: Важная информация' },
  { id: 't2', label: 'Подсказка 2: Дополнительные сведения' },
  { id: 't3', label: 'Подсказка 3: Примечание' }
];

export const BasicSingleSelect = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox label="Базовый выбор">
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple={false} />
    </ComboBox>
  );
};
BasicSingleSelect.storyName = 'Базовый выбор одного элемента';
export const BasicSingleSelectWithInitialValue = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox initialValue={[simpleOptions[0]]} label="Базовый выбор">
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple={false} />
    </ComboBox>
  );
};
BasicSingleSelectWithInitialValue.storyName = 'Базовый выбор одного элемента с начальным значением';
export const MultipleSelectWithInitialValue = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox initialValue={[simpleOptions[0], simpleOptions[1]]} label="Базовый выбор">
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple={true} />
    </ComboBox>
  );
};
MultipleSelectWithInitialValue.storyName = 'Множественный выбор с начальным значением';

export const MultipleSelectWithSearchAndCheckAll = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox label="Множественный выбор с поиском" tooltipDescription="Выберите одну или несколько опций">
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple isSearch isCheckAll />
    </ComboBox>
  );
};
MultipleSelectWithSearchAndCheckAll.storyName = 'Множественный выбор с поиском';

export const DraggableListExample = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  const [options, setOptions] = useState<IComboBoxOption[]>(simpleOptions);

  const handleReorder = useCallback((reorderedItems: IComboBoxOption[]) => {
    setOptions(reorderedItems);
  }, []);

  return (
    <ComboBox label="Перетаскиваемый список">
      <ComboDraggableList
        items={options}
        onChange={setSelected}
        onReorder={handleReorder}
        isMultiple
        droppableId="draggable-list"
      />
    </ComboBox>
  );
};
DraggableListExample.storyName = 'Перетаскиваемый список';

export const GroupedOptionsExample = () => {
  const [selected, setSelected] = useState<IComboBoxGroupOption[]>([]);
  return (
    <ComboBox label="Группировка опций">
      <ComboGroupList items={groupOptions} onChange={setSelected} isMultiple isSearch isCheckAll />
    </ComboBox>
  );
};
GroupedOptionsExample.storyName = 'Группировка опций';

export const TreeViewExample = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox label="Древовидный список" countOnlyLevel={2}>
      <ComboTreeList items={treeOptions} onChange={setSelected} isMultiple isSearch isCheckAll />
    </ComboBox>
  );
};
TreeViewExample.storyName = 'Древовидный список';

export const TreeViewWithMaxLevelExample = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox label="Древовидный список" countOnlyLevel={2}>
      <ComboTreeList items={treeOptions} maxLevel={2} onChange={setSelected} isMultiple isSearch isCheckAll />
    </ComboBox>
  );
};
TreeViewWithMaxLevelExample.storyName = 'Древовидный список с ограничением уровня вложенности';

export const ResizableDropdownExample = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);
  return (
    <ComboBox
      label="Изменяемый по размеру"
      isResize={true}
      dropdownWidth={300}
      dropdownHeight={400}
      dropdownMinWidth={200}
      dropdownMinHeight={150}
    >
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple />
    </ComboBox>
  );
};
ResizableDropdownExample.storyName = 'Изменяемый размер выпадающего списка';

export const TooltipDescriptionExample = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);

  return (
    <ComboBox label="Комбобокс с подсказкой" tooltipDescription={tooltipItems}>
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple={false} />
    </ComboBox>
  );
};
TooltipDescriptionExample.storyName = 'ComboBox с подсказкой (массив)';

export const TooltipDescriptionStringExample = () => {
  const [selected, setSelected] = useState<IComboBoxOption[]>([]);

  return (
    <ComboBox
      label="Комбобокс с текстовой подсказкой"
      tooltipDescription="Это подробное описание компонента ComboBox с текстовой подсказкой, которая отображается при наведении на компонент"
    >
      <ComboList items={simpleOptions} onChange={setSelected} isMultiple={false} />
    </ComboBox>
  );
};
TooltipDescriptionStringExample.storyName = 'ComboBox с текстовой подсказкой (строка)';
