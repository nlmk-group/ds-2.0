import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{a as n}from"./chunk-454WOBUV-CM0pFb8Z.js";import{V as t,W as S,X as M}from"./index-BB0QFCoF.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import{T as i}from"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import{q as s}from"./32-MLA202Yz.js";import"./index-DQ2WTIsS.js";import{s as E}from"./styles.module-BSI8LUpZ.js";import{a as D,D as z,T as R,b as U,c as w,d as A,e as P}from"./constants-BknxA7b7.js";import"./v4-CQkTLCs1.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const W=u=>o.jsx("div",{className:E.wrapper,children:u()}),so={title:"Components/ToggleButtonGroup/Stories",component:t,decorators:[W],argTypes:D},e=u=>o.jsxs(t,{...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Печенье"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Торты"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Конфеты"})})]});e.storyName=z;const r=u=>o.jsxs(t,{...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(i,{variant:"Caption-Medium",children:"Печенье"}),placement:"left",children:o.jsx(t.Button.Label,{children:"Печенье"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(i,{variant:"Caption-Medium",children:"Торты"}),children:o.jsx(t.Button.Label,{children:"Торты"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(i,{variant:"Caption-Medium",children:"Кексы"}),placement:"bottom",children:o.jsx(t.Button.Label,{children:"Кексы"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(i,{variant:"Caption-Medium",children:"Конфеты"}),placement:"right",children:o.jsx(t.Button.Label,{children:"Конфеты"})})})]});r.storyName=R;const l=u=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(S).map((a,c)=>o.jsxs(t,{size:a,...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Печенье"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Торты"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Конфеты"})})]},c))});l.storyName=U;const B=u=>o.jsxs(t,{...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Печенье"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Торты"}),o.jsx(t.Button.Icon,{})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{children:o.jsx(s,{})}),o.jsx(t.Button.Label,{children:"Конфеты"}),o.jsx(t.Button.Icon,{children:o.jsx(s,{})})]})]});B.storyName=w;const g=u=>o.jsxs(t,{...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Label,{children:"Печенье"}),o.jsx(t.Button.Badge,{children:"7"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Badge,{children:"5"}),o.jsx(t.Button.Label,{children:"Торты"}),o.jsx(t.Button.Badge,{children:"5"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Label,{children:"Конфеты"}),o.jsx(t.Button.Badge,{variant:"outline",children:12})]})]});g.storyName=A;const p=u=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(M).map((a,c)=>o.jsxs(t,{status:a,...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Печенье"}),o.jsx(t.Button.Badge,{children:"7"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Торты"}),o.jsx(t.Button.Badge,{children:"5"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Конфеты"}),o.jsx(t.Button.Badge,{children:"3"})]})]},c))});p.storyName=P;var T,G,d;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(d=(G=e.parameters)==null?void 0:G.docs)==null?void 0:d.source}}};var m,x,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Печенье</Typography>} placement="left">
          <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Торты</Typography>}>
          <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Кексы</Typography>} placement="bottom">
          <ToggleButtonGroup.Button.Label>Кексы</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Конфеты</Typography>} placement="right">
          <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,k,h;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping, index: number) => <ToggleButtonGroup size={size} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>)}
    </div>;
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var b,L,y;B.parameters={...B.parameters,docs:{...(b=B.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
        <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(y=(L=B.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var I,O,v;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
        <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge variant="outline">{7 + 5}</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>;
}`,...(v=(O=g.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var N,f,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IToggleButtonGroup): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {Object.values(statusMapping).map((status: statusMapping, index: number) => <ToggleButtonGroup status={status} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>3</ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>)}
    </div>;
}`,...(_=(f=p.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const To=["DefaultBtnGroup","BtnGroupTooltip","BtnGroupSizes","BtnGroupIcon","BtnGroupIconBadge","BtnGroupOptions"];export{B as BtnGroupIcon,g as BtnGroupIconBadge,p as BtnGroupOptions,l as BtnGroupSizes,r as BtnGroupTooltip,e as DefaultBtnGroup,To as __namedExportsOrder,so as default};
