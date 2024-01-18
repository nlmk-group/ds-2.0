/**
 * Создаёт массив заданной длины и заполняет его объектами, представляющими единицы времени.
 * @param length Длина создаваемого массива.
 * @return Массив объектов, представляющих единицы времени.
 */
const createTimeArray = (length: number) =>
  new Array(length).fill(null).map((_, idx) => ({ value: idx, label: idx.toString().padStart(2, '0') }));

// Создаем массив из 24 элементов для представления часов
export const hours = createTimeArray(24);

// Создаем массив из 60 элементов для представления минут
export const minutes = createTimeArray(60);

// Создаем массив из 60 элементов для представления секунд
export const seconds = createTimeArray(60);
