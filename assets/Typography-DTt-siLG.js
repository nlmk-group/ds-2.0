import{r as g,j as t,m as h,S as m,U as f}from"./iframe-DUDunD5j.js";import{useMDXComponents as c}from"./index-CDbv5Jgm.js";import{T as y}from"./index-DyX2qzoz.js";import{DecoratorDefault as S}from"./Decorator.stories-DJdCAXEf.js";import{s as p,H,E as s}from"./Header-BrZEypuE.js";import{F as u}from"./FigmaEmbed-DovFRgvJ.js";import{P as z}from"./Properties-CcP2VO-p.js";import{T as W}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as o}from"./index-DntXJei4.js";import{a as T}from"./argsTypes-JSRsgyqy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const r="Typography",a="https://www.figma.com/design/7GI4zrw0ZKhFKb6oMWvAK9/NLMK-Typo?node-id=5635-99311&t=GnmwsdqmCXZcM99O-1",x=()=>{const[i,e]=g.useState(0),n=d=>i===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(H,{title:r,description:"Компонент для стандартизации текста и относящимся к нему свойствам стилизации.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${r}`,figmaLink:a}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),i==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Типография по умолчанию",code:`import { Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <Typography>
    Default Typography Component
  </Typography>
)
              `}),t.jsx(s,{height:400,description:`Элементы типографии представляют собой текст с обязательно примененными
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
              `}),t.jsx(z,{argsTypes:T})]}),i==1&&t.jsx(u,{url:a}),i==2&&t.jsx(W,{componentName:r})]})};function l(i){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Typography/Info",component:y,parameters:{design:{type:"figma",url:"https://www.figma.com/file/7GI4zrw0ZKhFKb6oMWvAK9/Typography?node-id=5635%3A99311&t=mHvj1XkP8SBQL42a-0"},jest:["Typography.test.tsx"]}}),`
`,t.jsx(m,{of:S}),`
`,t.jsx(f,{children:t.jsx(x,{})})]})}function ht(i={}){const{wrapper:e}={...c(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(l,{...i})}):l()}export{ht as default};
