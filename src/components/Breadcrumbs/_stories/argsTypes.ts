import { targetMapping } from '../enums';

export const breadcrumbsArgsTypes = {
  crumbs: {
    description: 'Массив, содержащий Breadcrumb объекты',
    table: {
      defaultValue: {
        summary: 'Type<Breadcrumbs[]>, required'
      }
    },
    control: {
      type: 'object'
    }
  },
  width: {
    description: 'Максимальная ширина элемента в процентах',
    table: {
      defaultValue: {
        summary: 100
      }
    },
    control: { type: 'number' }
  }
};

export const breadcrumbsItemsArgsTypes = {
  label: {
    description: 'Название',
    table: {
      defaultValue: {
        summary: 'Type<string>, required'
      }
    }
  },
  href: {
    description: 'Ссылка',
    table: {
      defaultValue: {
        summary: 'Type<string>, required'
      }
    }
  },
  target: {
    description: 'Атрибут определяет где открывать документ, на который ведет ссылка',
    table: {
      defaultValue: {
        summary: targetMapping._parent
      }
    }
  },
  active: {
    description: 'Опциональное свойство. С этим свойством компонент демонстрирует текущую страницу',
    table: {
      defaultValue: {
        summary: 'false'
      }
    }
  }
};

export default { ...breadcrumbsArgsTypes, ...breadcrumbsItemsArgsTypes}
