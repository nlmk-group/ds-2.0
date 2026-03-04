export const getItemKey = (item: { id?: string | number }, idx: number) => String(item.id ?? idx);
