import{j as t,a as u}from"./clsx.m-3764cf42.js";import{a as n}from"./chunk-WFFRPTHA-a68c42c5.js";import{a5 as o,a3 as S,a4 as _}from"./index-28aa8d3c.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import"./index-f1f749bf.js";import{s as A}from"./styles.module-caf3a80a.js";import{f as v,D as z,T as F,a as j,b as R,c as U,e as M}from"./constants-a6a22a0c.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const w=e=>t("div",{className:A.wrapper,children:e()}),so={title:"Components/ToggleButtonGroup/Stories",component:o,decorators:[w],argTypes:v},r=e=>u(o,{...e,children:[t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Печенье"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Торты"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Конфеты"})})]});r.storyName=z;const l=e=>u(o,{...e,children:[t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Печенье",placement:"left",children:t(o.Button.Label,{children:"Печенье"})})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Торты",children:t(o.Button.Label,{children:"Торты"})})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Кексы",placement:"bottom",children:t(o.Button.Label,{children:"Кексы"})})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Конфеты",placement:"right",children:t(o.Button.Label,{children:"Конфеты"})})})]});l.storyName=F;const B=e=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(S).map((c,a)=>u(o,{size:c,...e,children:[t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Печенье"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Торты"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Конфеты"})})]},a))});B.storyName=j;const g=e=>u(o,{...e,children:[u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Печенье"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Торты"}),t(o.Button.Icon,{})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{name:"IconStarBorder24"}),t(o.Button.Label,{children:"Конфеты"}),t(o.Button.Icon,{name:"IconStarBorder24"})]})]});g.storyName=R;const p=e=>u(o,{...e,children:[u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Label,{children:"Печенье"}),t(o.Button.Badge,{children:"7"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Badge,{children:"5"}),t(o.Button.Label,{children:"Торты"}),t(o.Button.Badge,{children:"5"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Label,{children:"Конфеты"}),t(o.Button.Badge,{children:7+5})]})]});p.storyName=U;const i=e=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(_).map((c,a)=>u(o,{status:c,...e,children:[u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Печенье"}),t(o.Button.Badge,{children:"7"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Торты"}),t(o.Button.Badge,{children:"5"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Конфеты"}),t(o.Button.Badge,{children:"3"})]})]},a))});i.storyName=M;var T,s,G;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>
          Печенье
        </ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>
          Торты
        </ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>
          Конфеты
        </ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(G=(s=r.parameters)==null?void 0:s.docs)==null?void 0:G.source}}};var d,m,C;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip description='Печенье' placement='left'>
          <ToggleButtonGroup.Button.Label>
            Печенье
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip description='Торты'>
          <ToggleButtonGroup.Button.Label>
            Торты
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip description='Кексы' placement='bottom'>
          <ToggleButtonGroup.Button.Label>
            Кексы
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip description='Конфеты' placement='right'>
          <ToggleButtonGroup.Button.Label>
            Конфеты
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(C=(m=l.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var k,b,L;B.parameters={...B.parameters,docs:{...(k=B.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping, index: number) => <ToggleButtonGroup size={size} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>
              Печенье
            </ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>
              Торты
            </ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>
              Конфеты
            </ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>)}
    </div>;
}`,...(L=(b=B.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var h,I,y;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>
          Печенье
        </ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>
          Торты
        </ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon name='IconStarBorder24' />
        <ToggleButtonGroup.Button.Label>
          Конфеты
        </ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon name='IconStarBorder24' />
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(y=(I=g.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var O,E,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>
          Печенье
        </ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>
          7
        </ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Badge>
          5
        </ToggleButtonGroup.Button.Badge>
        <ToggleButtonGroup.Button.Label>
          Торты
        </ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>
          5
        </ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>
          Конфеты
        </ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>
          {7 + 5}
        </ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(D=(E=p.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var N,x,f;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(statusMapping).map((status: statusMapping, index: number) => <ToggleButtonGroup status={status} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>
              Печенье
            </ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>
              7
            </ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>
              Торты
            </ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>
              5
            </ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>
              Конфеты
            </ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>
              3
            </ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>)}
    </div>;
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const Go=["DefaultBtnGroup","BtnGroupTooltip","BtnGroupSizes","BtnGroupIcon","BtnGroupIconBadge","BtnGroupOptions"];export{g as BtnGroupIcon,p as BtnGroupIconBadge,i as BtnGroupOptions,B as BtnGroupSizes,l as BtnGroupTooltip,r as DefaultBtnGroup,Go as __namedExportsOrder,so as default};
