type Quarter = {
  month: number;
  name: string;
  values: number[];
};

type LocaleInfo = {
  months: string[];
  quarters: Quarter[];
  weekdays: string[];
  quarterTranslation: string;
  label: {
    default: string;
    showtime: string;
  };
  shiftDescription: string;
  buttons: {
    accept: string;
    decline: string;
  };
};

type LocaleStrings = {
  [key: string]: LocaleInfo;
};

export const locale: LocaleStrings = {
  ru: {
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    quarters: [
      { month: 0, name: '1 квартал', values: [0, 1, 2] },
      { month: 3, name: '2 квартал', values: [3, 4, 5] },
      { month: 6, name: '3 квартал', values: [6, 7, 8] },
      { month: 9, name: '4 квартал', values: [9, 10, 11] }
    ],
    weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    quarterTranslation: 'квартал',
    label: {
      default: 'Дата',
      showtime: 'Дата и время'
    },
    shiftDescription: 'Смены начала и конца периода',
    buttons: {
      accept: 'Применить',
      decline: 'Отменить'
    }
  },
  en: {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    quarters: [
      { month: 0, name: '1 quarter', values: [0, 1, 2] },
      { month: 3, name: '2 quarter', values: [3, 4, 5] },
      { month: 6, name: '3 quarter', values: [6, 7, 8] },
      { month: 9, name: '4 quarter', values: [9, 10, 11] }
    ],
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    quarterTranslation: 'quarter',
    label: {
      default: 'Date',
      showtime: 'Date and time'
    },
    shiftDescription: 'Changes of the beginning and end of the period',
    buttons: {
      accept: 'Accept',
      decline: 'Cancel'
    }
  }
};
