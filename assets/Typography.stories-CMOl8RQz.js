import{U as l,M as v,e as u}from"./chunk-HLWAVYOI-3UuSo40k.js";import{T as y}from"./index-nWYpQihe.js";import{a as r,j as t,F as m}from"./jsx-runtime-2xDJh5tt.js";import{r as S}from"./index-CBqU2yxZ.js";import{s as c,H as C,E as p,T as H}from"./Tests-CG_HxZSo.js";import{F as b}from"./FigmaEmbed-B6PozHHU.js";import{P as z}from"./Properties-yqLT-zEm.js";/* empty css               */import{L as e}from"./index-BkR7uP_9.js";import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import"./32-DtWm84R6.js";import{a as M}from"./argsTypes-7B4xoQB2.js";import{useMDXComponents as W}from"./index-DI5IigMn.js";import"./iframe-DV-cxdDr.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-D59JP59T.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DCgXVlgj.js";import"./index-CMH8wQUv.js";const s="Typography",g="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1027%3A18324&mode=design&t=awyt3Fzj1XS6th7v-1",h=()=>{const[i,o]=S.useState(0),a=T=>i===T;return r("div",{className:c.wrapper,children:[t(C,{title:s,description:"Компонент для стандартизации текста и относящимся к нему свойствам стилизации.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:g}),t("div",{className:c.tabs,children:r(e,{children:[t(e.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t(e.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t(e.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),i==0&&r(m,{children:[t(p,{height:200,description:"Типография по умолчанию",code:`import { Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <Typography>
    Default Typography Component
  </Typography>
)
              `}),t(p,{height:400,description:`Элементы типографии представляют собой текст с обязательно примененными
            стилями: размером шрифта (font-size), величиной пространства между строками
            (line-height) и жирностью шрифта (font-weight). Также в таблице представлены
            пояснения для целевого использования объектов типографии.`,code:`import { Typography } from '@nlmk/ds-2.0';

const rows = [
  {
    title: 'Heading1',
    fontSize: 48,
    lineHeight: 56,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Subheading1',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 400,
    description: 'Подзаголовок'
  },
  {
    title: 'Heading2',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Subheading2',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 400,
    description: 'Подзаголовок'
  },
  {
    title: 'Subheading2-Medium',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 500,
    description: 'Подзаголовок'
  },
  {
    title: 'Heading3',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Subheading3',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 400,
    description: 'Подзаголовок'
  },
  {
    title: 'Subheading3-Medium',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 500,
    description: 'Подзаголовок'
  },
  {
    title: 'Heading4',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Body1',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
    description: 'Текст контента тонкий'
  },
  {
    title: 'Body1-Medium',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 500,
    description: 'Текст инпутов, ячеек таблиц, контента'
  },
  {
    title: 'Body1-Bold',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
    description: 'Текст в кнопках, жирный текст у активных элементов'
  },
  {
    title: 'Body2',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400,
    description: 'Текст контента тонкий'
  },
  {
    title: 'Body2-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 500,
    description: 'Текст инпутов, ячеек таблиц, контента'
  },
  {
    title: 'Body2-Bold',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 700,
    description: 'Текст в кнопках, жирный текст у активных элементов'
  },
  {
    title: 'Caption',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    description: 'Текст мелких подписей, шкал графиков'
  },
  {
    title: 'Caption-Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    description: 'Текст мелких подписей, шкал графиков'
  },
  {
    title: 'Caption-Bold',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    description: 'Текст мелких подписей, шкал графиков'
  }
];

export default App = () => (
  <>
  {rows.map(variant => (
    <div key={variant.title}>
      <Typography variant={variant.title} color="primary">
        {variant.title}
      </Typography>
      <Typography color="primary">
        {variant.fontSize} - {variant.lineHeight}
      </Typography>
      <Typography color="primary">{variant.fontWeight}</Typography>
      <Typography color="primary">{variant.description}</Typography>
    </div>
  ))}
  </>
)
              `}),t(p,{height:400,description:`Для типографии доступны следующие цвета: inherit (по умолчанию), primary,
            secondary, hint, disabled, error, success, warning, info, textSecondary,
            textPrimary.`,code:`import { Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <Typography variant="Heading1" color="primary">
    variant: Heading1, color: primary
  </Typography>
  <Typography variant="Subheading2-Medium" color="secondary">
    variant: Subheading2-Medium, color: secondary
  </Typography>
  <Typography variant="Caption" color="hint">
    variant: Caption, color: hint
  </Typography>
  <Typography variant="Caption-Bold" color="disabled">
    variant: Caption-Bold, color: disabled
  </Typography>
  <Typography variant="Caption" color="error">
    variant: Caption, color: error
  </Typography>
  <Typography variant="Caption" color="success">
    variant: Caption, color: success
  </Typography>
  <Typography variant="Caption" color="warning">
    variant: Caption, color: warning
  </Typography>
  <Typography variant="Caption" color="info">
    variant: Caption, color: info
  </Typography>
  <Typography variant="Caption" color="textPrimary">
    variant: Caption, color: textPrimary
  </Typography>
  <Typography variant="Caption" color="textSecondary">
    variant: Caption, color: textSecondary
  </Typography>
  </>
)
              `}),t(z,{argsTypes:M})]}),i==1&&t(b,{url:g}),i==2&&t(y,{variant:"Heading4",color:"primary",children:t(H,{componentName:s})})]})};function d(i){return r(m,{children:[t(v,{title:"Components/Typography/Info",component:y,parameters:{design:{type:"figma",url:"https://www.figma.com/file/7GI4zrw0ZKhFKb6oMWvAK9/Typography?node-id=5635%3A99311&t=mHvj1XkP8SBQL42a-0"},jest:["Typography.test.tsx"]}}),`
`,t(u,{name:"Docs",children:t(l,{children:t(h,{})})})]})}function w(i={}){const{wrapper:o}=Object.assign({},W(),i.components);return o?t(o,{...i,children:t(d,{...i})}):d()}const f=()=>t(l,{children:t(h,{})});f.storyName="Docs";f.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const n={title:"Components/Typography/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/7GI4zrw0ZKhFKb6oMWvAK9/Typography?node-id=5635%3A99311&t=mHvj1XkP8SBQL42a-0"},jest:["Typography.test.tsx"]},component:y,tags:["stories-mdx"],includeStories:["docs"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:w};const ct=["docs"];export{ct as __namedExportsOrder,n as default,f as docs};
