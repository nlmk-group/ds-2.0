import{r as E,j as e,e as f}from"./iframe-CxLN9ksd.js";import{B as r}from"./index-CT_Q_AhL.js";import{B}from"./index-D3DoxRCP.js";import{T as n}from"./index-CORENSTS.js";import{c as A}from"./clsx-B-dksMZM.js";import{b as G,s as g,E as m,a as b,S as a}from"./argsTypes-C-tWNMTT.js";import{g as F}from"./styles.module-BGEDXogi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LyR6p6RN.js";const o=({children:t,className:u,onClick:p,toggleButton:v,buttonIndex:h,disabled:x})=>{const{disabled:S,size:j,activeId:T}=E.useContext(G),C=T===h,y=S||x,k=D=>{y||(v?.(),p?.(D))};return e.jsx("button",{type:"button",onClick:k,disabled:y,className:A(g.segmentButton,C&&g.active,j===m.s&&g["segmentButton-s"],u),"data-ui-segment-button":!0,"data-testid":"SEGMENT_BUTTON",children:t})};try{o.displayName="SegmentButton",o.__docgenInfo={description:"Компонент `SegmentButton` представляет собой одну кнопку внутри `SegmentButtonGroup`.\nПоддерживает состояние `active`, переключение состояний и обработку кликов.",displayName:"SegmentButton",props:{className:{defaultValue:null,description:"Кастомный класс для кнопки.",name:"className",required:!1,type:{name:"string"}},buttonIndex:{defaultValue:null,description:"Индекс кнопки в группе (для управления `active` состоянием).",name:"buttonIndex",required:!1,type:{name:"number"}},active:{defaultValue:null,description:"Флаг, указывающий, что кнопка должна быть активной по умолчанию.",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Флаг, отключающий конкретную кнопку (имеет приоритет над групповым disabled).",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Контент кнопки (иконки, текст и т. д.).",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Коллбэк, вызываемый при клике на кнопку.",name:"onClick",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => void)"}},toggleButton:{defaultValue:null,description:"Функция для переключения `active` состояния кнопки.",name:"toggleButton",required:!1,type:{name:"(() => void)"}}}}}catch{}const N=t=>e.jsx("div",{className:F.wrapper,children:e.jsx(t,{})}),W={title:"Components/SegmentButtonGroup/Stories",component:a,decorators:[N],argTypes:b},d=t=>e.jsxs(a,{...t,children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]});d.storyName="SegmentButtonGroup по умолчанию";const l=t=>e.jsx(r,{flexDirection:"column",gap:12,children:Object.values(m).map((u,p)=>e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:`Размер ${u} `}),e.jsxs(a,{size:u,...t,children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),e.jsxs(a,{size:u,...t,children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Чугун"})})]})]},p))});l.storyName="SegmentButtonGroup с разными обертками для текста";l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const i=()=>e.jsxs(r,{flexDirection:"column",gap:24,children:[e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Первая кнопка активна по умолчанию"}),e.jsxs(a,{children:[e.jsx(o,{active:!0,onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Средняя кнопка активна по умолчанию"}),e.jsxs(a,{children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{active:!0,onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Последняя кнопка активна по умолчанию"}),e.jsxs(a,{children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{active:!0,onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]})]});i.storyName="SegmentButtonGroup с активной кнопкой по умолчанию";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const c=()=>e.jsxs(r,{flexDirection:"column",gap:24,children:[e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Вся группа отключена"}),e.jsxs(a,{disabled:!0,children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Отдельные кнопки отключены"}),e.jsxs(a,{children:[e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{disabled:!0,onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк (отключено)"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]})]}),e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Комбинация: активная по умолчанию + отключена одна кнопка"}),e.jsxs(a,{children:[e.jsx(o,{active:!0,onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{disabled:!0,onClick:()=>{},children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун (отключено)"})})]})]})]});c.storyName="SegmentButtonGroup с отключенными кнопками";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const s=()=>{const[t,u]=f.useState("steel");return e.jsx(r,{flexDirection:"column",gap:24,children:e.jsxs(r,{flexDirection:"column",gap:8,children:[e.jsx(n,{variant:"Heading4",color:"var(--steel-90)",children:"Управление активной кнопкой извне"}),e.jsxs(n,{variant:"Body1-Medium",color:"var(--steel-70)",children:["Текущая активная: ",t==="steel"?"Сталь":t==="zinc"?"Цинк":"Чугун"]}),e.jsxs(a,{children:[e.jsx(o,{active:t==="steel",onClick:()=>u("steel"),children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),e.jsx(o,{active:t==="zinc",onClick:()=>u("zinc"),children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),e.jsx(o,{active:t==="iron",onClick:()=>u("iron"),children:e.jsx(n,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),e.jsxs(r,{flexDirection:"row",gap:8,pt:16,children:[e.jsx(B,{onClick:()=>u("steel"),children:"Активировать Сталь через state"}),e.jsx(B,{onClick:()=>u("zinc"),children:"Активировать Цинк через state"}),e.jsx(B,{onClick:()=>u("iron"),children:"Активировать Чугун через state"})]})]})})};s.storyName="SegmentButtonGroup с управлением извне";s.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
  return <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={() => {}}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={() => {}}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={() => {}}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
  return <Box flexDirection="column" gap={12}>
      {Object.values(ESegmentButtonGroupSizes).map((size, index) => <Box key={index} flexDirection="column" gap={8}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {\`Размер \${size} \`}
          </Typography>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={() => {}}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={() => {}}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={() => {}}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={() => {}}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={() => {}}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={() => {}}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>
        </Box>)}
    </Box>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(): ReactNode => {
  return <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Первая кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton active onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Средняя кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton active onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Последняя кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton active onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>
    </Box>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(): ReactNode => {
  return <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Вся группа отключена
        </Typography>
        <SegmentButtonGroup disabled>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Отдельные кнопки отключены
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton disabled onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк (отключено)
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Комбинация: активная по умолчанию + отключена одна кнопка
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton active onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton disabled onClick={() => {}}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун (отключено)
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>
    </Box>;
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(): ReactNode => {
  const [activeButton, setActiveButton] = React.useState<'steel' | 'zinc' | 'iron'>('steel');
  return <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Управление активной кнопкой извне
        </Typography>
        <Typography variant="Body1-Medium" color="var(--steel-70)">
          Текущая активная: {activeButton === 'steel' ? 'Сталь' : activeButton === 'zinc' ? 'Цинк' : 'Чугун'}
        </Typography>

        <SegmentButtonGroup>
          <SegmentButton active={activeButton === 'steel'} onClick={() => setActiveButton('steel')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton active={activeButton === 'zinc'} onClick={() => setActiveButton('zinc')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton active={activeButton === 'iron'} onClick={() => setActiveButton('iron')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>

        <Box flexDirection="row" gap={8} pt={16}>
          <Button onClick={() => setActiveButton('steel')}>Активировать Сталь через state</Button>
          <Button onClick={() => setActiveButton('zinc')}>Активировать Цинк через state</Button>
          <Button onClick={() => setActiveButton('iron')}>Активировать Чугун через state</Button>
        </Box>
      </Box>
    </Box>;
}`,...s.parameters?.docs?.source}}};const O=["SegmentButtonGroupDefault","SegmentButtonGroupWithTypography","SegmentButtonGroupWithDefaultActive","SegmentButtonGroupDisabled","SegmentButtonGroupControlled"];export{s as SegmentButtonGroupControlled,d as SegmentButtonGroupDefault,c as SegmentButtonGroupDisabled,i as SegmentButtonGroupWithDefaultActive,l as SegmentButtonGroupWithTypography,O as __namedExportsOrder,W as default};
