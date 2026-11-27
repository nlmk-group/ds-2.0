export const argsTypes = {
  children: {
    description: 'Элементы Breadcrumbs.Crumb в порядке от главной страницы до текущей.',
    table: { type: { summary: 'ReactNode' } }
  },
  width: {
    description: 'Ширина компонента',
    control: { type: 'text' }
  },
  className: {
    description: 'Дополнительный CSS-класс для компонента хлебных крошек',
    table: {
      defaultValue: {
        summary: '-'
      }
    },
    control: { type: 'text' }
  }
};

export default argsTypes;
