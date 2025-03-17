import{j as u}from"./jsx-runtime-BRNY0I4F.js";import{aF as D,V as x,aG as p,aE as s}from"./TreeList-DRh8CIov.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as t}from"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import{r as f}from"./index-Bnop-kX6.js";import"./32-DmPReyKt.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as A}from"./styles.module-ox-emdf8.js";import{c as F}from"./clsx-B-dksMZM.js";import{a as G}from"./argsTypes-D4FcMtCY.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const e=({children:o,className:n,onClick:a,toggleButton:c,buttonIndex:S})=>{const{disabled:d,size:C,activeId:E}=f.useContext(D),k=E===S,T=j=>{d||(c==null||c(),a==null||a(j))};return u.jsx("button",{onClick:T,disabled:d,className:F(p.segmentButton,k&&p.active,C===x.s&&p["segmentButton-s"],n),"data-ui-segment-button":!0,"data-testid":"SEGMENT_BUTTON",children:o})};try{e.displayName="SegmentButton",e.__docgenInfo={description:"Компонент `SegmentButton` представляет собой одну кнопку внутри `SegmentButtonGroup`.\nПоддерживает состояние `active`, переключение состояний и обработку кликов.",displayName:"SegmentButton",props:{className:{defaultValue:null,description:"Кастомный класс для кнопки.",name:"className",required:!1,type:{name:"string"}},buttonIndex:{defaultValue:null,description:"Индекс кнопки в группе (для управления `active` состоянием).",name:"buttonIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Контент кнопки (иконки, текст и т. д.).",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Коллбэк, вызываемый при клике на кнопку.",name:"onClick",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => void)"}},toggleButton:{defaultValue:null,description:"Функция для переключения `active` состояния кнопки.",name:"toggleButton",required:!1,type:{name:"(() => void)"}}}}}catch{}const N=o=>u.jsx("div",{className:A.wrapper,children:u.jsx(o,{})}),tu={title:"Components/SegmentButtonGroup/Stories",component:s,decorators:[N],argTypes:G},i=o=>u.jsxs(s,{...o,children:[u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]});i.storyName="SegmentButtonGroup по умолчанию";const l=o=>u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(x).map((n,a)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:`Размер ${n} `}),u.jsxs(s,{size:n,...o,children:[u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),u.jsxs(s,{size:n,...o,children:[u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Сталь"})}),u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Цинк"})}),u.jsx(e,{onClick:r("onClick"),children:u.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Чугун"})})]})]},a))});l.storyName="SegmentButtonGroup с разными обертками для текста";var m,y,B;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
  return <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>;
}`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var g,v,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(ESegmentButtonGroupSizes).map((size, index) => <div key={index} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {\`Размер \${size} \`}
          </Typography>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>
        </div>)}
    </div>;
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const ou=["SegmentButtonGroupDefault","SegmentButtonGroupWithTypography"];export{i as SegmentButtonGroupDefault,l as SegmentButtonGroupWithTypography,ou as __namedExportsOrder,tu as default};
