import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  supplier: string;
  warehouse: string;
  lastUpdate: string;
  description: string;
};

const columnHelper = createColumnHelper<Product>();

export const columns: ColumnDef<Product, any>[] = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
    size: 80,
    meta: {
      title: 'Идентификатор',
      isFixed: true
    }
  }),
  columnHelper.accessor('name', {
    header: 'Название',
    cell: info => info.getValue(),
    size: 200,
    meta: {
      title: 'Название товара',
      isFixed: true
    }
  }),
  columnHelper.accessor('category', {
    header: 'Категория',
    cell: info => info.getValue(),
    size: 150,
    meta: {
      title: 'Категория товара'
    }
  }),
  columnHelper.accessor('price', {
    header: 'Цена',
    cell: info => `${info.getValue()} ₽`,
    size: 120,
    meta: {
      isNumeric: true,
      title: 'Цена за единицу'
    }
  }),
  columnHelper.accessor('quantity', {
    header: 'Количество',
    cell: info => info.getValue(),
    size: 120,
    meta: {
      isNumeric: true,
      title: 'Количество на складе'
    }
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: info => info.getValue(),
    size: 130,
    meta: {
      title: 'Статус товара'
    }
  }),
  columnHelper.accessor('supplier', {
    header: 'Поставщик',
    cell: info => info.getValue(),
    size: 180,
    meta: {
      title: 'Поставщик товара'
    }
  }),
  columnHelper.accessor('warehouse', {
    header: 'Склад',
    cell: info => info.getValue(),
    size: 150,
    meta: {
      title: 'Склад хранения'
    }
  }),
  columnHelper.accessor('lastUpdate', {
    header: 'Последнее обновление',
    cell: info => info.getValue(),
    size: 180,
    meta: {
      title: 'Дата последнего обновления'
    }
  }),
  columnHelper.accessor('description', {
    header: 'Описание',
    cell: info => info.getValue(),
    size: 300,
    meta: {
      title: 'Описание товара'
    }
  })
];

export const data: Product[] = [
  {
    id: '1',
    name: 'Сталь листовая холоднокатаная',
    category: 'Листовой прокат',
    price: 65000,
    quantity: 150,
    status: 'В наличии',
    supplier: 'Металлургический комбинат №1',
    warehouse: 'Склад А',
    lastUpdate: '2025-10-15',
    description: 'Холоднокатаная сталь толщиной 1.5мм, марка 08ПС'
  },
  {
    id: '2',
    name: 'Арматура строительная А500С',
    category: 'Сортовой прокат',
    price: 52000,
    quantity: 280,
    status: 'В наличии',
    supplier: 'Сталепрокатный завод',
    warehouse: 'Склад Б',
    lastUpdate: '2025-10-14',
    description: 'Арматура диаметром 12мм, класс А500С'
  },
  {
    id: '3',
    name: 'Труба бесшовная горячедеформированная',
    category: 'Трубный прокат',
    price: 78000,
    quantity: 95,
    status: 'В наличии',
    supplier: 'Трубный завод',
    warehouse: 'Склад А',
    lastUpdate: '2025-10-13',
    description: 'Труба 159x8мм, сталь 20, ГОСТ 8732-78'
  },
  {
    id: '4',
    name: 'Балка двутавровая №20',
    category: 'Фасонный прокат',
    price: 58000,
    quantity: 0,
    status: 'Нет в наличии',
    supplier: 'Металлургический комбинат №2',
    warehouse: 'Склад В',
    lastUpdate: '2025-10-10',
    description: 'Двутавр стальной горячекатаный, высота 200мм'
  },
  {
    id: '5',
    name: 'Лист горячекатаный',
    category: 'Листовой прокат',
    price: 61000,
    quantity: 220,
    status: 'В наличии',
    supplier: 'Металлургический комбинат №1',
    warehouse: 'Склад Б',
    lastUpdate: '2025-10-16',
    description: 'Горячекатаный лист толщиной 8мм, сталь 3СП'
  },
  {
    id: '6',
    name: 'Уголок равнополочный 50x50x5',
    category: 'Фасонный прокат',
    price: 54000,
    quantity: 180,
    status: 'В наличии',
    supplier: 'Сталепрокатный завод',
    warehouse: 'Склад А',
    lastUpdate: '2025-10-15',
    description: 'Уголок стальной горячекатаный, ГОСТ 8509-93'
  },
  {
    id: '7',
    name: 'Проволока стальная оцинкованная',
    category: 'Метизы',
    price: 72000,
    quantity: 340,
    status: 'В наличии',
    supplier: 'Метизный завод',
    warehouse: 'Склад В',
    lastUpdate: '2025-10-14',
    description: 'Проволока диаметром 3мм, оцинкованная, ГОСТ 3282-74'
  },
  {
    id: '8',
    name: 'Швеллер гнутый 120x60x4',
    category: 'Фасонный прокат',
    price: 59000,
    quantity: 45,
    status: 'Ограничено',
    supplier: 'Металлургический комбинат №2',
    warehouse: 'Склад Б',
    lastUpdate: '2025-10-12',
    description: 'Швеллер стальной гнутый равнополочный'
  }
];
