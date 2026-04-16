import{j as a,r as c}from"./iframe-CHHQDVoX.js";import{E as m}from"./index-CwmmLxy5.js";import{T as l}from"./index-C5RO9eqh.js";import{T as r}from"./index-BTZVm9Y3.js";import{g as T}from"./styles.module-BGEDXogi.js";import{a as v}from"./argsTypes-D1YlrH5F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DYQTidD-.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./generateUUID-M57HTP56.js";import"./index-Di9izlqG.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-O653EECt.js";import"./24-DIXfQiLz.js";import"./24-CD6xrv2j.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-JhZx5C50.js";import"./16-1skbPHrv.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./16-CzdCZHDH.js";const d="Tabs-stories-module__wrapper___JIaiC",u={wrapper:d},g=t=>a.jsx("div",{className:u.wrapper,children:a.jsx(t,{})}),Q={title:"Components/Tabs/Stories",component:r,decorators:[g],argTypes:v},s=t=>{const[e,i]=c.useState(0);return a.jsxs("div",{children:[a.jsxs(r,{children:[a.jsx(r.Tab,{...t,label:"Входящие",active:Number(e)===0,onClick:()=>i(0)}),a.jsx(r.Tab,{...t,label:"Черновики",active:Number(e)===1,onClick:()=>i(1)})]}),Number(e)==0&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(e)==1&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"})]})};s.storyName="Один таб с наглядными контролами";s.args={hasBadge:!0,hasIcon:!0,badgeChildren:"11",badgeColor:m.brand};const n=t=>{const[e,i]=c.useState(0);return a.jsxs("div",{children:[a.jsxs(r,{children:[a.jsx(r.Tab,{...t,label:"Входящие",active:Number(e)===0,onClick:()=>i(0)}),a.jsx(r.Tab,{...t,label:"Мои папки",active:Number(e)===1,onClick:()=>i(1)}),a.jsx(r.Tab,{...t,label:"Спам",active:Number(e)===2,hasBadge:!0,onClick:()=>i(2),badgeChildren:10,badgeColor:m.brand,children:a.jsx(r.Tooltip,{render:a.jsx(l,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:a.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})})}),a.jsx(r.Tab,{...t,label:"Черновики",active:Number(e)===3,onClick:()=>i(3)})]}),Number(e)==0&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(e)==1&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(e)==2&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(e)==3&&a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})};n.storyName="Дефолтные табы";const p=[{value:0,label:"Входящие"},{value:1,label:"Мои папки"},{value:2,label:"Спам",tooltip:"Сюда вы можете добавить текст подсказу для компонента"},{value:3,label:"Черновики"},{value:4,label:"Отправленные"},{value:5,label:"Избранное"},{value:6,label:"Отмеченное"},{value:7,label:"Коллекция"}],b=t=>{const[e,i]=c.useState(0);return a.jsxs("div",{className:T["wrapper--small"],children:[a.jsx(r,{scrollable:!0,children:p.map(o=>c.createElement(r.Tab,{...t,key:o.label,label:o.label,active:o.value===Number(e),onClick:()=>i(o.value)},o.tooltip?a.jsx(r.Tooltip,{render:a.jsx(l,{variant:"Caption-Medium",children:o.tooltip}),children:a.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})}):void 0))}),p.map(o=>Number(e)===o.value&&a.jsx("div",{style:{marginTop:"10px"},children:a.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:o.label},o.label)}))]})};b.storyName="Табы с возможностью скролла";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
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
