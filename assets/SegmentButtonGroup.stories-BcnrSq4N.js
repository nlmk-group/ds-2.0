import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{T as l,U as e,S as B}from"./TreeList--IdMnsib.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as t}from"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import"./32-BTlKmMLd.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as h}from"./styles.module-ox-emdf8.js";import{a as v}from"./argsTypes-BRzmHLCr.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const S=n=>o.jsx("div",{className:h.wrapper,children:o.jsx(n,{})}),F={title:"Components/SegmentButtonGroup/Stories",component:l,decorators:[S],argTypes:v},i=n=>o.jsxs(l,{...n,children:[o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]});i.storyName="SegmentButtonGroup по умолчанию";const a=n=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(B).map((p,g)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:`Размер ${p} `}),o.jsxs(l,{size:p,...n,children:[o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Bold",color:"var(--steel-90)",children:"Чугун"})})]}),o.jsxs(l,{size:p,...n,children:[o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Сталь"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Цинк"})}),o.jsx(e,{onClick:r("onClick"),children:o.jsx(t,{variant:"Body1-Medium",color:"var(--steel-90)",children:"Чугун"})})]})]},g))});a.storyName="SegmentButtonGroup с разными обертками для текста";var c,s,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(argTypes: ISegmentButtonGroupProps): ReactNode => {
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
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const H=["SegmentButtonGroupDefault","SegmentButtonGroupWithTypography"];export{i as SegmentButtonGroupDefault,a as SegmentButtonGroupWithTypography,H as __namedExportsOrder,F as default};
