import{M as d,U as f}from"./chunk-HLWAVYOI-653a1315.js";import{T as g}from"./index-fb030d50.js";import{a as r,j as t,F as l}from"./clsx.m-3764cf42.js";import{r as T}from"./index-f1f749bf.js";import{s as m,H as v,E as p,T as u}from"./Tests-27e47391.js";import{F as S}from"./FigmaEmbed-3478e7e6.js";import{P as C}from"./Properties-72516426.js";/* empty css               */import{a as e}from"./index-28aa8d3c.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as H}from"./argsTypes-5dfaead0.js";import{u as b}from"./index-4fb8b842.js";import"./iframe-697674bb.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-c4c1b386.js";import"./index-29c055d1.js";import"./.jest-test-results-7c3b4ed9.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./index-c1da5c13.js";const s="Typography",y="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1027%3A18324&mode=design&t=awyt3Fzj1XS6th7v-1",z=()=>{const[i,o]=T.useState(0),a=c=>i===c;return r("div",{className:m.wrapper,children:[t(v,{title:s,description:"Компонент для стандартизации текста и относящимся к нему свойствам стилизации.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:y}),t("div",{className:m.tabs,children:r(e,{children:[t(e.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t(e.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t(e.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),i==0&&r(l,{children:[t(p,{height:200,description:"Типография по умолчанию",code:`import { Typography } from '@nlmk/ds-2.0';

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
              `}),t(C,{argsTypes:H})]}),i==1&&t(S,{url:y}),i==2&&t(g,{variant:"Heading4",color:"primary",children:t(u,{componentName:s})})]})};function h(i){return r(l,{children:[t(d,{title:"Components/Typography/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/file/7GI4zrw0ZKhFKb6oMWvAK9/Typography?node-id=5635%3A99311&t=mHvj1XkP8SBQL42a-0"},jest:["Typography.test.tsx"]}}),`
`,t(f,{children:t(z,{})})]})}function w(i={}){const{wrapper:o}=Object.assign({},b(),i.components);return o?t(o,{...i,children:t(h,{...i})}):h()}const M=()=>{throw new Error("Docs-only story")};M.parameters={docsOnly:!0};const n={title:"Components/Typography/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/7GI4zrw0ZKhFKb6oMWvAK9/Typography?node-id=5635%3A99311&t=mHvj1XkP8SBQL42a-0"},jest:["Typography.test.tsx"]},component:g,tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:w};const lt=["__page"];export{lt as __namedExportsOrder,M as __page,n as default};
