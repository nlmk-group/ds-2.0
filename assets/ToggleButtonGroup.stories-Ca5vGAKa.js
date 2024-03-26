import{j as t,a as u}from"./clsx.m-CcuEzMhP.js";import{a as n}from"./chunk-WFFRPTHA-B5TewAtn.js";import{T as o,G as S,I as v}from"./index-eGAKGCMw.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-BzeUb5Di.js";import"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import{b as T}from"./32-BmhDzcbC.js";import"./index-CBqU2yxZ.js";import{s as A}from"./styles.module-DeLvTIFi.js";import{a as z,D as F,T as j,b as R,c as U,d as M,e as w}from"./constants-BbCZ8Voy.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";const P=e=>t("div",{className:A.wrapper,children:e()}),ao={title:"Components/ToggleButtonGroup/Stories",component:o,decorators:[P],argTypes:z},l=e=>u(o,{...e,children:[t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Печенье"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Торты"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Конфеты"})})]});l.storyName=F;const r=e=>u(o,{...e,children:[t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Печенье",placement:"left",children:t(o.Button.Label,{children:"Печенье"})})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Торты",children:t(o.Button.Label,{children:"Торты"})})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Кексы",placement:"bottom",children:t(o.Button.Label,{children:"Кексы"})})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Tooltip,{description:"Конфеты",placement:"right",children:t(o.Button.Label,{children:"Конфеты"})})})]});r.storyName=j;const B=e=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(S).map((c,a)=>u(o,{size:c,...e,children:[t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Печенье"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Торты"})}),t(o.Button,{onClick:n("onClick"),children:t(o.Button.Label,{children:"Конфеты"})})]},a))});B.storyName=R;const g=e=>u(o,{...e,children:[u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Печенье"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Торты"}),t(o.Button.Icon,{})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{children:t(T,{})}),t(o.Button.Label,{children:"Конфеты"}),t(o.Button.Icon,{children:t(T,{})})]})]});g.storyName=U;const i=e=>u(o,{...e,children:[u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Label,{children:"Печенье"}),t(o.Button.Badge,{children:"7"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Badge,{children:"5"}),t(o.Button.Label,{children:"Торты"}),t(o.Button.Badge,{children:"5"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Label,{children:"Конфеты"}),t(o.Button.Badge,{variant:"outline",children:12})]})]});i.storyName=M;const p=e=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(v).map((c,a)=>u(o,{status:c,...e,children:[u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Печенье"}),t(o.Button.Badge,{children:"7"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Торты"}),t(o.Button.Badge,{children:"5"})]}),u(o.Button,{onClick:n("onClick"),children:[t(o.Button.Icon,{}),t(o.Button.Label,{children:"Конфеты"}),t(o.Button.Badge,{children:"3"})]})]},a))});p.storyName=w;var s,G,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
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
}`,...(d=(G=l.parameters)==null?void 0:G.docs)==null?void 0:d.source}}};var C,m,k;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
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
}`,...(k=(m=r.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var b,L,h;B.parameters={...B.parameters,docs:{...(b=B.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
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
}`,...(h=(L=B.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var I,y,O;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
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
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
        <ToggleButtonGroup.Button.Label>
          Конфеты
        </ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(O=(y=g.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var E,D,N;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
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
        <ToggleButtonGroup.Button.Badge variant="outline">
          {7 + 5}
        </ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var x,f,_;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
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
}`,...(_=(f=p.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const To=["DefaultBtnGroup","BtnGroupTooltip","BtnGroupSizes","BtnGroupIcon","BtnGroupIconBadge","BtnGroupOptions"];export{g as BtnGroupIcon,i as BtnGroupIconBadge,p as BtnGroupOptions,B as BtnGroupSizes,r as BtnGroupTooltip,l as DefaultBtnGroup,To as __namedExportsOrder,ao as default};
