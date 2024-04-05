const argsTypes = {
  size: {
    description: 'Размер спиннера <b>m | l | xl | xxl</b>',
    control: { type: 'select', options: ['m', 'l', 'xl', 'xxl'] },
    table: {
      defaultValue: {
        summary: 'l'
      }
    }
  },
  color: {
    description: 'Цвет основного элемента спиннера',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'var(--primary-blue-600)'
      }
    }
  },
  bgColor: {
    description: 'Цвет подложки элемента спиннера',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'var(--text-grey-100)'
      }
    }
  },
  children: {
    description: 'React children элемент, может быть только компонентом Icon',
    control: { type: 'object' }
  }
};

export default argsTypes;
