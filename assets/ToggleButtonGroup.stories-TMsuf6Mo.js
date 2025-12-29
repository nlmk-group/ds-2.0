import{j as o}from"./iframe-zk5xXBtA.js";import{T as p}from"./index-9BCGLlQQ.js";import{T as t,E as s}from"./index-D9zx9C-F.js";import{a as T}from"./argsTypes-CLKZfsKz.js";import{I as i}from"./24-BGS-MQmY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";const d="ToggleButtonGroup-module__wrapper___JUjVm",G={wrapper:d},{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=u=>o.jsx("div",{className:G.wrapper,children:o.jsx(u,{})}),O={title:"Components/ToggleButtonGroup/Stories",component:t,decorators:[C],argTypes:T},e=u=>o.jsxs(t,{...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Сталь"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Цинк"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Чугун"})})]});e.storyName="Toggle Button по умолчанию";const r=u=>o.jsxs(t,{...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Сталь"}),placement:"left",children:o.jsx(t.Button.Label,{children:"Сталь"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Цинк"}),children:o.jsx(t.Button.Label,{children:"Цинк"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Чугун"}),placement:"bottom",children:o.jsx(t.Button.Label,{children:"Чугун"})})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Tooltip,{render:o.jsx(p,{variant:"Caption-Medium",children:"Оксид меди"}),placement:"right",children:o.jsx(t.Button.Label,{children:"Оксид меди"})})})]});r.storyName="Toggle Button с тултипами";const l=u=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:Object.values(s).map((a,c)=>o.jsxs(t,{size:a,...u,children:[o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Сталь"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Цинк"})}),o.jsx(t.Button,{onClick:n("onClick"),children:o.jsx(t.Button.Label,{children:"Оксид меди"})})]},c))});l.storyName="Toggle Button с разными размерами";const g=u=>o.jsxs(t,{...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Сталь"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{}),o.jsx(t.Button.Label,{children:"Цинк"}),o.jsx(t.Button.Icon,{})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Icon,{children:o.jsx(i,{})}),o.jsx(t.Button.Label,{children:"Оксид меди"}),o.jsx(t.Button.Icon,{children:o.jsx(i,{})})]})]});g.storyName="Toggle Button с иконками";const B=u=>o.jsxs(t,{...u,children:[o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Label,{children:"Сталь"}),o.jsx(t.Button.Badge,{children:"7"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Badge,{children:"5"}),o.jsx(t.Button.Label,{children:"Цинк"}),o.jsx(t.Button.Badge,{children:"5"})]}),o.jsxs(t.Button,{onClick:n("onClick"),children:[o.jsx(t.Button.Label,{children:"Оксид меди"}),o.jsx(t.Button.Badge,{variant:"outline",children:12})]})]});B.storyName="Toggle Button с бейджами";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
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
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(argTypes: IToggleButtonGroupProps): ReactNode => {
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
}`,...B.parameters?.docs?.source}}};const z=["DefaultBtnGroup","BtnGroupTooltip","BtnGroupSizes","BtnGroupIcon","BtnGroupIconBadge"];export{g as BtnGroupIcon,B as BtnGroupIconBadge,l as BtnGroupSizes,r as BtnGroupTooltip,e as DefaultBtnGroup,z as __namedExportsOrder,O as default};
