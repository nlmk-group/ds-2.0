const e={items:{description:"Массив элементов для отображения. Пустые/null элементы отфильтровываются. previewSrc используется в сетке (может быть null/undefined), fullSrc обязателен и используется в модальном окне/для открытия.",table:{defaultValue:{summary:"[]"},type:{summary:"IImageItem[]",detail:`type IImageItem = {
  id?: string | number;
  previewSrc?: string | null;
  fullSrc: string;
  previewTitle?: string;
  title?: string;
  description?: string;
  downloadName?: string;
  downloadHandler?: (item: IImageItem) => void;
  alt?: string;
  PlaceholderSvgIcon?: React.ReactElement;
};`}},control:{type:"object"}},className:{description:"Дополнительный CSS-класс для корневого контейнера.",table:{defaultValue:{summary:"undefined"},type:{summary:"string"}},control:{type:"string"}},previewImgSize:{description:"Фиксированная ширина и высота миниатюры в пикселях.",table:{defaultValue:{summary:"140"},type:{summary:"number"}},control:{type:"number",min:1,step:1}},checkedMap:{description:"Карта выбранных элементов (источник истины снаружи). Ключ: String(item.id ?? index).",table:{defaultValue:{summary:"undefined"},type:{summary:"Record<string, boolean>"}},control:{type:"object"}},handleCheckbox:{description:"Единый обработчик изменения чекбокса. Вызывается с { item, checked }. Если не передан, чекбоксы не отображаются.",table:{defaultValue:{summary:"undefined"},type:{summary:"({ item, checked }: { item: IImageItem; checked: boolean }) => void"},disable:!0}},onPreviewClick:{description:"Обработчик клика по неграфическому файлу/элементу без открытия модального окна. Вызывается с item.",table:{defaultValue:{summary:"undefined"},type:{summary:"(item: IImageItem) => void"},disable:!0}}};export{e as a};
