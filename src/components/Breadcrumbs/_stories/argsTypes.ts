export const argsTypes = {
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
