import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{S as l,T as e,Q as B}from"./TreeList-t5OOsUq-.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as t}from"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BQAMZg9d.js";import"./index-C5rKoyII.js";import"./index-BcJSXhQi.js";import"./32-DMwn_7G4.js";import{a as r}from"./index-B-lxVbXh.js";import{g as h}from"./styles.module-m0Zsy3Hi.js";import{a as v}from"./argsTypes-B-CyDlJ8.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";const S=n=>o.jsx("div",{className:h.wrapper,children:o.jsx(n,{})}),J={title:"Components/SegmentButtonGroup/Stories",component:l,decorators:[S],argTypes:v},i=n=>o.jsxs(l,{...n,children:[o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]});i.storyName="SegmentButtonGroup по умолчанию";const a=n=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(B).map((p,g)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:`Размер ${p} `}),o.jsxs(l,{size:p,...n,children:[o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),o.jsxs(l,{size:p,...n,children:[o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Чугун"})})]})]},g))});a.storyName="SegmentButtonGroup с разными обертками для текста";var c,s,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var d,y,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
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
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const K=["SegmentButtonGroupDefault","SegmentButtonGroupWithTypography"];export{i as SegmentButtonGroupDefault,a as SegmentButtonGroupWithTypography,K as __namedExportsOrder,J as default};
