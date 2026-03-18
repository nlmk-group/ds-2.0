const e={comments:{description:"Массив корневых комментариев для компонента Comments. Вложенность задается через replies. createdAt/updatedAt ожидаются в строковом формате, например ISO. Дополнительные данные для кастомизации шапки можно передавать через generic-поле data.",table:{defaultValue:{summary:"[]"},type:{summary:"IComment<TData = unknown>[]",detail:`export interface ICommentBuiltInActions {
  onEdit?: (data: ICommentFormData) => void;
  onDelete?: (commentId: string) => void;
}

export interface ICommentLink {
  label: string;
  url: string;
}

export interface ICommentActionProps {
  value: string;
  label: string;
  onClick: (commentId: string) => void;
  disabled?: boolean;
}

export interface IComment<TData = unknown> {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  replies: IComment<TData>[];
  parentId?: string;
  commentLink?: ICommentLink;
  builtInActions?: ICommentBuiltInActions;
  customActions?: ICommentActionProps[];
  data?: TData;
}

export interface ICommentFormData {
  content: string;
  commentId?: string;
}

export interface ICommentsProps<TData = unknown> {
  comments: IComment<TData>[];
  children: React.ReactNode;
  handleAddRootComment?: (data: ICommentFormData) => void;
  handleAddReply?: (data: ICommentFormData) => void;
  handleRefresh?: () => void;
  isLoading?: boolean;
  className?: string;
}

export interface ICommentProps {
  children: React.ReactNode;
}

export interface ICommentHeaderProps {
  children: React.ReactNode;
}

export interface ICommentHeaderExtraRenderArgs<TData = unknown> {
  comment: IComment<TData>;
  data?: TData;
}

export interface ICommentHeaderExtraProps<TData = unknown> {
  children: (args: ICommentHeaderExtraRenderArgs<TData>) => React.ReactNode;
}`}},control:{type:"object"}},children:{description:"Шаблон отображения одного комментария. Ожидается использование compound API через Comments.Item. Шапка описывается через Comments.Header, а кастомные элементы внутри шапки через Comments.HeaderExtra.",table:{type:{summary:"React.ReactNode"},disable:!0}},handleAddRootComment:{description:"Колбэк добавления корневого комментария.",table:{type:{summary:"(data: ICommentFormData) => void"},disable:!0}},handleAddReply:{description:"Колбэк добавления ответа к комментарию.",table:{type:{summary:"(data: ICommentFormData) => void"},disable:!0}},handleRefresh:{description:"Колбэк для обновления списка комментариев.",table:{type:{summary:"() => void"},disable:!0}},isLoading:{description:"Флаг состояния загрузки списка комментариев.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},className:{description:"Дополнительный CSS-класс для корневого контейнера компонента.",table:{type:{summary:"string"}},control:{type:"text"}}};export{e as a};
