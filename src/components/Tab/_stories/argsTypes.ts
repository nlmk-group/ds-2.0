const argsTypes = {    
  label: {
    description: 'Заголовок вкладки',    
    control: { type: 'text' }   
  },
  active: {
    description: 'Состояние активной или не активной вкладки',
    control: { type: 'boolean' }
  },
  badgeNumber: {
    description: 'Текст лейбла Badge',
    control: { type: 'range', min: 1, max: 100, step: 2 }
  },
  children: {
    description: 'React children элемент, может быть только компонентом Tooltip c Icon',
    control: { type: 'object' }
  },
  props: {
    description: 'В компонент можно передавать event handling onClick, onMouseEnter, onMouseLeave и т.д.'
  }
};

export default argsTypes;