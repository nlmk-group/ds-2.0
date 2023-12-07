export const argsTypes = {
  percentage: {
    description:
      'Процент выполнения задачи или процесса, который должен быть показан в виде заполнения полосы прогресса.',
    table: {
      type: {
        summary: 'number'
      },
      defaultValue: {
        summary: 0
      }
    },
    control: {
      type: 'number',
      min: 0,
      max: 100
    }
  },
  label: {
    description: 'Текстовая метка, которая будет отображаться поверх полосы прогресса.',
    table: {
      type: {
        summary: 'string'
      },
      defaultValue: {
        summary: null
      }
    },
    control: {
      type: 'text'
    }
  }
};
