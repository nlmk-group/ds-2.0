import{j as a,r as o}from"./iframe-GHQjEpsb.js";import{E as x}from"./index-CwMtZ6LD.js";import{T as i,a as g,b as y}from"./index-CV-3xeQ8.js";import{T as l}from"./index-DJb1dn78.js";import{a as C}from"./argsTypes-Cb10H3dC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-ByRS7bpi.js";import"./index-CAqv-5FK.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-BT3VdodN.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./16-BqW1rNBw.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-D5tiDrSz.js";import"./index-DB2EGOHJ.js";import"./generateUUID-M57HTP56.js";const k="Tabs-stories-module__wrapper___JIaiC",j={wrapper:k,"scrollable-wrapper":"Tabs-stories-module__scrollable-wrapper___gsg7u"},N=e=>a.jsx("div",{className:j.wrapper,children:a.jsx(e,{})}),aa={title:"Components/Tabs/Stories",component:i,decorators:[N],argTypes:C},c=e=>{const[t,s]=o.useState(0);return a.jsxs("div",{children:[a.jsxs(i,{children:[a.jsx(i.Tab,{...e,label:"Входящие",active:Number(t)===0,onClick:()=>s(0)}),a.jsx(i.Tab,{...e,label:"Черновики",active:Number(t)===1,onClick:()=>s(1)})]}),Number(t)==0&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(t)==1&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"})]})};c.storyName="Один таб с наглядными контролами";c.args={hasBadge:!0,hasIcon:!0,badgeChildren:"11",badgeColor:x.brand};const b=e=>{const[t,s]=o.useState(0);return a.jsxs("div",{children:[a.jsxs(i,{children:[a.jsx(i.Tab,{...e,label:"Входящие",active:Number(t)===0,onClick:()=>s(0)}),a.jsx(i.Tab,{...e,label:"Мои папки",active:Number(t)===1,onClick:()=>s(1)}),a.jsx(i.Tab,{...e,label:"Спам",active:Number(t)===2,hasBadge:!0,onClick:()=>s(2),badgeChildren:10,badgeColor:x.brand,children:a.jsx(i.Tooltip,{render:a.jsx(l,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:a.jsx(i.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})})}),a.jsx(i.Tab,{...e,label:"Черновики",active:Number(t)===3,onClick:()=>s(3)})]}),Number(t)==0&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(t)==1&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(t)==2&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(t)==3&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})};b.storyName="Дефолтные табы";const h=[{value:0,label:"Входящие"},{value:1,label:"Мои папки"},{value:2,label:"Спам",tooltip:"Сюда вы можете добавить текст подсказу для компонента"},{value:3,label:"Черновики"},{value:4,label:"Отправленные"},{value:5,label:"Избранное"},{value:6,label:"Отмеченное"},{value:7,label:"Коллекция"}],T=e=>{const[t,s]=o.useState(0);return a.jsxs("div",{className:j["scrollable-wrapper"],children:[a.jsx(i,{scrollable:!0,children:h.map(r=>o.createElement(i.Tab,{...e,key:r.label,label:r.label,active:r.value===Number(t),onClick:()=>s(r.value)},r.tooltip?a.jsx(i.Tooltip,{render:a.jsx(l,{variant:"Caption-Medium",children:r.tooltip}),children:a.jsx(i.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})}):void 0))}),h.map(r=>Number(t)===r.value&&a.jsx("div",{style:{marginTop:"10px"},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:r.label},r.label)}))]})};T.storyName="Табы с возможностью скролла";const v=()=>{const[e,t]=o.useState(0);return a.jsxs("div",{children:[a.jsx("div",{style:{padding:"8px"},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:["Входящие","Мои папки","Спам","Черновики"][e]})}),a.jsxs(i,{indicatorPosition:"top",children:[a.jsx(i.Tab,{label:"Входящие",active:e===0,onClick:()=>t(0)}),a.jsx(i.Tab,{label:"Мои папки",active:e===1,onClick:()=>t(1)}),a.jsx(i.Tab,{label:"Спам",active:e===2,onClick:()=>t(2)}),a.jsx(i.Tab,{label:"Черновики",active:e===3,onClick:()=>t(3)})]})]})};v.storyName="Табы с индикатором сверху";const p=()=>{const[e,t]=o.useState(0);return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsxs(i,{orientation:y.vertical,tabPosition:g.left,children:[a.jsx(i.Tab,{label:"Входящие",active:e===0,onClick:()=>t(0)}),a.jsx(i.Tab,{label:"Мои папки",active:e===1,onClick:()=>t(1)}),a.jsx(i.Tab,{label:"Спам",active:e===2,onClick:()=>t(2),hasBadge:!0,badgeChildren:"91",badgeColor:x.brand}),a.jsx(i.Tab,{label:"Черновики",active:e===3,onClick:()=>t(3)})]}),a.jsx("div",{style:{padding:"8px",width:200},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:["Входящие","Мои папки","Спам","Черновики"][e]})})]})};p.storyName="Вертикальные табы слева от контента";const d=()=>{const[e,t]=o.useState(0);return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx("div",{style:{padding:"8px",width:200},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:["Входящие","Мои папки","Черновики"][e]})}),a.jsxs(i,{orientation:y.vertical,tabPosition:g.right,children:[a.jsx(i.Tab,{label:"Входящие",active:e===0,onClick:()=>t(0)}),a.jsx(i.Tab,{label:"Мои папки",active:e===1,onClick:()=>t(1)}),a.jsx(i.Tab,{label:"Черновики",active:e===2,onClick:()=>t(2)})]})]})};d.storyName="Вертикальные табы справа от контента";const m=()=>{const[e,t]=o.useState(0),s=["Входящие сообщения и уведомления","Мои папки и документы","Спам и нежелательная почта","Черновики"];return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(i,{orientation:y.vertical,tabPosition:g.left,children:s.map((r,n)=>a.jsx(i.Tab,{label:r,active:e===n,onClick:()=>t(n)},r))}),a.jsx("div",{style:{padding:"8px",width:280},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:s[e]})})]})};m.storyName="Вертикальные табы с переносом длинного текста";const u=()=>{const[e,t]=o.useState(0),s=["Входящие сообщения и уведомления","Мои папки и документы","Спам и нежелательная почта","Черновики"];return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(i,{orientation:y.vertical,tabPosition:g.left,maxTabWidth:180,children:s.map((r,n)=>a.jsx(i.Tab,{label:r,active:e===n,onClick:()=>t(n)},r))}),a.jsx("div",{style:{padding:"8px",width:280},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:s[e]})})]})};u.storyName="Вертикальные табы (ellipsis с maxTabWidth)";c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return <div>
      <Tabs>
        <Tabs.Tab {...args} label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab {...args} label="Черновики" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
      </Tabs>
      {Number(activeTab) == 0 && <Typography variant="Heading4" color="var(--steel-90)">
          Входящие
        </Typography>}
      {Number(activeTab) == 1 && <Typography variant="Heading4" color="var(--steel-90)">
          Мои папки
        </Typography>}
    </div>;
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return <div>
      <Tabs>
        <Tabs.Tab {...args} label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab {...args} label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab {...args} label="Спам" active={2 === Number(activeTab)} hasBadge={true} onClick={() => setActiveTab(2)} badgeChildren={10} badgeColor={EBadgeColors.brand}>
          <Tabs.Tooltip render={<Typography variant="Caption-Medium">Сюда вы можете добавить текст подсказу для компонента</Typography>}>
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-50)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab {...args} label="Черновики" active={3 === Number(activeTab)} onClick={() => setActiveTab(3)} />
      </Tabs>

      {Number(activeTab) == 0 && <Typography variant="Heading4" color="var(--steel-90)">
          Входящие
        </Typography>}
      {Number(activeTab) == 1 && <Typography variant="Heading4" color="var(--steel-90)">
          Мои папки
        </Typography>}
      {Number(activeTab) == 2 && <Typography variant="Heading4" color="var(--steel-90)">
          Спам
        </Typography>}
      {Number(activeTab) == 3 && <Typography variant="Heading4" color="var(--steel-90)">
          Черновики
        </Typography>}
    </div>;
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: ITabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={style['scrollable-wrapper']}>
      <Tabs scrollable>
        {tabItems.map(item => <Tabs.Tab {...args} key={item.label} label={item.label} active={item.value === Number(activeTab)} onClick={() => setActiveTab(item.value)}>
            {item.tooltip ? <Tabs.Tooltip render={<Typography variant="Caption-Medium">{item.tooltip}</Typography>}>
                <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-50)" />
              </Tabs.Tooltip> : undefined}
          </Tabs.Tab>)}
      </Tabs>

      {tabItems.map(item => Number(activeTab) === item.value && <div style={{
      marginTop: '10px'
    }}>
              <Typography variant="Heading4" color="var(--steel-90)" key={item.label}>
                {item.label}
              </Typography>
            </div>)}
    </div>;
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  return <div>
      <div style={{
      padding: '8px'
    }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {['Входящие', 'Мои папки', 'Спам', 'Черновики'][activeTab]}
        </Typography>
      </div>
      <Tabs indicatorPosition="top">
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={activeTab === 2} onClick={() => setActiveTab(2)} />
        <Tabs.Tab label="Черновики" active={activeTab === 3} onClick={() => setActiveTab(3)} />
      </Tabs>
    </div>;
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  return <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left}>
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={activeTab === 2} onClick={() => setActiveTab(2)} hasBadge badgeChildren="91" badgeColor={EBadgeColors.brand} />
        <Tabs.Tab label="Черновики" active={activeTab === 3} onClick={() => setActiveTab(3)} />
      </Tabs>
      <div style={{
      padding: '8px',
      width: 200
    }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {['Входящие', 'Мои папки', 'Спам', 'Черновики'][activeTab]}
        </Typography>
      </div>
    </div>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  return <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <div style={{
      padding: '8px',
      width: 200
    }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {['Входящие', 'Мои папки', 'Черновики'][activeTab]}
        </Typography>
      </div>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.right}>
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Черновики" active={activeTab === 2} onClick={() => setActiveTab(2)} />
      </Tabs>
    </div>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  const items = ['Входящие сообщения и уведомления', 'Мои папки и документы', 'Спам и нежелательная почта', 'Черновики'];
  return <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left}>
        {items.map((label, index) => <Tabs.Tab key={label} label={label} active={activeTab === index} onClick={() => setActiveTab(index)} />)}
      </Tabs>
      <div style={{
      padding: '8px',
      width: 280
    }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {items[activeTab]}
        </Typography>
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  const items = ['Входящие сообщения и уведомления', 'Мои папки и документы', 'Спам и нежелательная почта', 'Черновики'];
  return <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left} maxTabWidth={180}>
        {items.map((label, index) => <Tabs.Tab key={label} label={label} active={activeTab === index} onClick={() => setActiveTab(index)} />)}
      </Tabs>
      <div style={{
      padding: '8px',
      width: 280
    }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {items[activeTab]}
        </Typography>
      </div>
    </div>;
}`,...u.parameters?.docs?.source}}};const ea=["TabDefault","TabsDefault","TabsScrollable","TabsTopIndicator","TabsVerticalLeft","TabsVerticalRight","TabsVerticalWrap","TabsVerticalEllipsis"];export{c as TabDefault,b as TabsDefault,T as TabsScrollable,v as TabsTopIndicator,u as TabsVerticalEllipsis,p as TabsVerticalLeft,d as TabsVerticalRight,m as TabsVerticalWrap,ea as __namedExportsOrder,aa as default};
