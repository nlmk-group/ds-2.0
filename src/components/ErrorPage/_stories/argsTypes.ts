export const argsTypes = {
  errorCode: {
    description: 'Код ошибки',
    options: [
      100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402,
      403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 426,
      428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 507, 511
    ],
    control: { type: 'select' },
    defaultValue: 400,
    table: {
      defaultValue: {
        summary: 'number'
      }
    }
  },
  description: {
    description: 'Описание',
    control: { type: 'text' },
    table: {
      defaultValue: {
        summary: 'Произошла ошибка'
      },
      type: {
        summary: 'string'
      }
    }
  },
  hint: {
    description: 'Подсказка',
    control: { type: 'text' },
    defaultValue: 'Попробуйте обновить страницу',
    table: {
      defaultValue: {
        summary: 'Попробуйте обновить страницу'
      },
      type: {
        summary: 'string'
      }
    }
  }
};
