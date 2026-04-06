import{j as a,r as c}from"./iframe-adG_7yRG.js";import{E as m}from"./index-N0HJx9V2.js";import{T as l}from"./index-TjqOvBrG.js";import{T as r}from"./index-Yehuvb9K.js";import{g as T}from"./styles.module-BGEDXogi.js";import{a as v}from"./argsTypes-Dgjm8H4l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DzN3aT-y.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./generateUUID-M57HTP56.js";import"./index-DC_nQVbx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-C2G2GNsa.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-B-tnmrg_.js";import"./16-LI8OsMJg.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./16-C5RTlL5k.js";const d="Tabs-stories-module__wrapper___JIaiC",u={wrapper:d},g=t=>a.jsx("div",{className:u.wrapper,children:a.jsx(t,{})}),Q={title:"Components/Tabs/Stories",component:r,decorators:[g],argTypes:v},s=t=>{const[e,i]=c.useState(0);return a.jsxs("div",{children:[a.jsxs(r,{children:[a.jsx(r.Tab,{...t,label:"Входящие",active:Number(e)===0,onClick:()=>i(0)}),a.jsx(r.Tab,{...t,label:"Черновики",active:Number(e)===1,onClick:()=>i(1)})]}),Number(e)==0&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(e)==1&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"})]})};s.storyName="Один таб с наглядными контролами";s.args={hasBadge:!0,hasIcon:!0,badgeChildren:"11",badgeColor:m.brand};const n=t=>{const[e,i]=c.useState(0);return a.jsxs("div",{children:[a.jsxs(r,{children:[a.jsx(r.Tab,{...t,label:"Входящие",active:Number(e)===0,onClick:()=>i(0)}),a.jsx(r.Tab,{...t,label:"Мои папки",active:Number(e)===1,onClick:()=>i(1)}),a.jsx(r.Tab,{...t,label:"Спам",active:Number(e)===2,hasBadge:!0,onClick:()=>i(2),badgeChildren:10,badgeColor:m.brand,children:a.jsx(r.Tooltip,{render:a.jsx(l,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:a.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})})}),a.jsx(r.Tab,{...t,label:"Черновики",active:Number(e)===3,onClick:()=>i(3)})]}),Number(e)==0&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(e)==1&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(e)==2&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(e)==3&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})};n.storyName="Дефолтные табы";const p=[{value:0,label:"Входящие"},{value:1,label:"Мои папки"},{value:2,label:"Спам",tooltip:"Сюда вы можете добавить текст подсказу для компонента"},{value:3,label:"Черновики"},{value:4,label:"Отправленные"},{value:5,label:"Избранное"},{value:6,label:"Отмеченное"},{value:7,label:"Коллекция"}],b=t=>{const[e,i]=c.useState(0);return a.jsxs("div",{className:T["wrapper--small"],children:[a.jsx(r,{scrollable:!0,children:p.map(o=>c.createElement(r.Tab,{...t,key:o.label,label:o.label,active:o.value===Number(e),onClick:()=>i(o.value)},o.tooltip?a.jsx(r.Tooltip,{render:a.jsx(l,{variant:"Caption-Medium",children:o.tooltip}),children:a.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})}):void 0))}),p.map(o=>Number(e)===o.value&&a.jsx("div",{style:{marginTop:"10px"},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:o.label},o.label)}))]})};b.storyName="Табы с возможностью скролла";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
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
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: ITabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={styles['wrapper--small']}>
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
}`,...b.parameters?.docs?.source}}};const U=["TabDefault","TabsDefault","TabsScrollable"];export{s as TabDefault,n as TabsDefault,b as TabsScrollable,U as __namedExportsOrder,Q as default};
