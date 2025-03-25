import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{aO as t,ac as f}from"./TreeList-Dkg9TSoG.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as p}from"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import{c as i}from"./32-DmPReyKt.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as S}from"./argsTypes-COqRB-mX.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const M="_wrapper_179d9_1",N={wrapper:M},z=u=>o.jsx("div",{className:N.wrapper,children:o.jsx(u,{})}),no={title:"Components/ToggleButtonGroup/Stories",component:t,decorators:[z],argTypes:S},e=u=>o.jsxs(t,{...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Сталь"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Цинк"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Чугун"})})]});e.storyName="Toggle Button по умолчанию";const r=u=>o.jsxs(t,{...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Сталь"}),placement:"left",children:o.jsx(t.Button.Label,{children:"Сталь"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Цинк"}),children:o.jsx(t.Button.Label,{children:"Цинк"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Чугун"}),placement:"bottom",children:o.jsx(t.Button.Label,{children:"Чугун"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Оксид меди"}),placement:"right",children:o.jsx(t.Button.Label,{children:"Оксид меди"})})})]});r.storyName="Toggle Button с тултипами";const l=u=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(f).map((I,v)=>o.jsxs(t,{size:I,...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Сталь"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Цинк"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Оксид меди"})})]},v))});l.storyName="Toggle Button с разными размерами";const g=u=>o.jsxs(t,{...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Сталь"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Цинк"}),o.jsx(t.Button.Icon,{})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{children:o.jsx(i,{})}),o.jsx(t.Button.Label,{children:"Оксид меди"}),o.jsx(t.Button.Icon,{children:o.jsx(i,{})})]})]});g.storyName="Toggle Button с иконками";const B=u=>o.jsxs(t,{...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Label,{children:"Сталь"}),o.jsx(t.Button.Badge,{children:"7"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Badge,{children:"5"}),o.jsx(t.Button.Label,{children:"Цинк"}),o.jsx(t.Button.Badge,{children:"5"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Label,{children:"Оксид меди"}),o.jsx(t.Button.Badge,{variant:"outline",children:12})]})]});B.storyName="Toggle Button с бейджами";var a,c,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Чугун</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var T,d,G;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Сталь</Typography>} placement="left">
          <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Цинк</Typography>}>
          <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Чугун</Typography>} placement="bottom">
          <ToggleButtonGroup.Button.Label>Чугун</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Оксид меди</Typography>} placement="right">
          <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(G=(d=r.parameters)==null?void 0:d.docs)==null?void 0:G.source}}};var m,C,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(EToggleButtonGroupSizeMapping).map((size: EToggleButtonGroupSizeMapping, index: number) => <ToggleButtonGroup size={size} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>)}
    </div>;
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var h,k,j;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
        <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(j=(k=g.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var b,L,y;B.parameters={...B.parameters,docs:{...(b=B.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
        <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge variant="outline">{7 + 5}</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(y=(L=B.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const uo=["DefaultBtnGroup","BtnGroupTooltip","BtnGroupSizes","BtnGroupIcon","BtnGroupIconBadge"];export{g as BtnGroupIcon,B as BtnGroupIconBadge,l as BtnGroupSizes,r as BtnGroupTooltip,e as DefaultBtnGroup,uo as __namedExportsOrder,no as default};
