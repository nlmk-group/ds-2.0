import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as g}from"./index-CpguRmgc.js";import{ag as h,ah as m,ai as f}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{T as c}from"./index-ehXB0alm.js";import{DecoratorDefault as y}from"./Decorator.stories-BP3ijO2B.js";import{r as S}from"./index-DQ2WTIsS.js";import{s as p,H,E as a}from"./Header-D2gbLVua.js";import{F as u}from"./FigmaEmbed-DjqPO1nf.js";import{P as z}from"./Properties-C9DnMm3G.js";import{T as W}from"./Tests-CzPE_ao-.js";/* empty css               */import{a0 as o}from"./index-CZcUCixh.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as T}from"./argsTypes-JSRsgyqy.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const r="Typography",s="https://www.figma.com/design/7GI4zrw0ZKhFKb6oMWvAK9/NLMK-Typo?node-id=5635-99311&t=GnmwsdqmCXZcM99O-1",x=()=>{const[i,e]=S.useState(0),n=d=>i===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(H,{title:r,description:"Компонент для стандартизации текста и относящимся к нему свойствам стилизации.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${r}`,figmaLink:s}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),i==0&&t.jsxs(t.Fragment,{children:[t.jsx(a,{height:200,description:"Типография по умолчанию",code:`import { Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <Typography>
    Default Typography Component
  </Typography>
)
              `}),t.jsx(a,{height:400,description:`Элементы типографии представляют собой текст с обязательно примененными
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
      title: 'Body',
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 400,
      description: ''
    },
    {
      title: 'Body-Medium',
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 500,
      description: ''
    },
    {
      title: 'Body-Bold',
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 700,
      description: ''
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
      title: 'Body1Table-Medium',
      fontSize: 16,
      lineHeight: 16,
      fontWeight: 500,
      description: 'Текст для ячеек таблиц 40px и 32px'
    },
    {
      title: 'Body1Mono-Medium',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 500,
      description: 'Текст для цифр в ячейках таблиц'
    },
    {
      title: 'Body1Mono-Bold',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 700,
      description: 'Жирный текст для цифр в ячейках таблиц'
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
      title: 'Body2Mono-Medium',
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 500,
      description: 'Текст для цифр в ячейках таблиц'
    },
    {
      title: 'Body2Mono-Bold',
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 700,
      description: 'Жирный текст для цифр в ячейках таблиц'
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
      description: 'Текст мелкий для подписей, шкал графиков'
    },
    {
      title: 'Caption-Medium',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 500,
      description: 'Текст мелкий для подписей, шкал графиков'
    },
    {
      title: 'Caption-Bold',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 700,
      description: 'Текст мелкий для подписей, шкал графиков'
    },
    {
      title: 'CaptionMono',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 400,
      description: 'Моноширинное начертание для числовых данных'
    },
    {
      title: 'CaptionMono-Medium',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 500,
      description: 'Моноширинное начертание для числовых данных'
    },
    {
      title: 'CaptionMono-Bold',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 700,
      description: 'Моноширинное начертание для числовых данных'
    },
    {
      title: 'Additional-Bold',
      fontSize: 9,
      lineHeight: 12,
      fontWeight: 700,
      description: 'Жирный текст для Badge XS'
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
              `}),t.jsx(z,{argsTypes:T})]}),i==1&&t.jsx(u,{url:s}),i==2&&t.jsx(W,{componentName:r})]})};function l(i){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Typography/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/7GI4zrw0ZKhFKb6oMWvAK9/Typography?node-id=5635%3A99311&t=mHvj1XkP8SBQL42a-0"},jest:["Typography.test.tsx"]}}),`
`,t.jsx(m,{of:y}),`
`,t.jsx(f,{children:t.jsx(x,{})})]})}function pt(i={}){const{wrapper:e}={...g(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(l,{...i})}):l()}export{pt as default};
