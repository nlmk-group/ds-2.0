import{j as e,r as b}from"./iframe-zk5xXBtA.js";import{E as p}from"./index-B9FTsAqd.js";import{T as i}from"./index-9BCGLlQQ.js";import{T as r}from"./index-CGZqhooT.js";import{g as T}from"./styles.module-BGEDXogi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CTfBpVCI.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./index-1zUxKm4P.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./24-BkbQ4VQu.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const v="Tabs-stories-module__wrapper___JIaiC",d={wrapper:v},u={children:{description:"Вложенные элементы, которые будут отображаться в табах",control:{type:"object"}},className:{description:"CSS класс для настройки стилей компонента",control:{type:"text"}},scrollable:{description:"Флаг, указывающий, разрешено ли горизонтальное скроллирование вкладок",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},label:{description:"Текст метки для таба",control:{type:"text"}},active:{description:"Флаг, указывающий, активен ли текущий таб",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},hasBadge:{description:"Флаг, указывающий, должен ли таб отображать бейдж",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}},badgeColor:{description:"Заливка бейджа",options:Object.values(p),control:{type:"select"}},hasIcon:{description:"Флаг, указывающий, должен ли таб отображать иконку",control:{type:"boolean"},table:{defaultValue:{summary:!1}}}},g=t=>e.jsx("div",{className:d.wrapper,children:e.jsx(t,{})}),K={title:"Components/Tabs/Stories",component:r,decorators:[g],argTypes:u},s=t=>{const[a,l]=b.useState(0);return e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsx(r.Tab,{...t,label:"Входящие",active:Number(a)===0,onClick:()=>l(0)}),e.jsx(r.Tab,{...t,label:"Черновики",active:Number(a)===1,onClick:()=>l(1)})]}),Number(a)==0&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(a)==1&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"})]})};s.storyName="Один таб с наглядными контролами";s.args={hasBadge:!0,hasIcon:!0,badgeChildren:"11",badgeColor:p.brand};const n=t=>{const[a,l]=b.useState(0);return e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsx(r.Tab,{...t,label:"Входящие",active:Number(a)===0,onClick:()=>l(0)}),e.jsx(r.Tab,{...t,label:"Мои папки",active:Number(a)===1,onClick:()=>l(1)}),e.jsx(r.Tab,{...t,label:"Спам",active:Number(a)===2,hasBadge:!0,onClick:()=>l(2),badgeChildren:10,badgeColor:p.brand,children:e.jsx(r.Tooltip,{render:e.jsx(i,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:e.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})})}),e.jsx(r.Tab,{...t,label:"Черновики",active:Number(a)===3,onClick:()=>l(3)})]}),Number(a)==0&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(a)==1&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(a)==2&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(a)==3&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})};n.storyName="Дефолтные табы";const m=[{value:0,label:"Входящие"},{value:1,label:"Мои папки"},{value:2,label:"Спам",tooltip:"Сюда вы можете добавить текст подсказу для компонента"},{value:3,label:"Черновики"},{value:4,label:"Отправленные"},{value:5,label:"Избранное"},{value:6,label:"Отмеченное"},{value:7,label:"Коллекция"}],c=t=>{const[a,l]=b.useState(0);return e.jsxs("div",{className:T["wrapper--small"],children:[e.jsx(r,{scrollable:!0,children:m.map(o=>b.createElement(r.Tab,{...t,key:o.label,label:o.label,active:o.value===Number(a),onClick:()=>l(o.value)},o.tooltip?e.jsx(r.Tooltip,{render:e.jsx(i,{variant:"Caption-Medium",children:o.tooltip}),children:e.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})}):void 0))}),m.map(o=>Number(a)===o.value&&e.jsx("div",{style:{marginTop:"10px"},children:e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:o.label},o.label)}))]})};c.storyName="Табы с возможностью скролла";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: ITabProps) => {
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
}`,...c.parameters?.docs?.source}}};const L=["TabDefault","TabsDefault","TabsScrollable"];export{s as TabDefault,n as TabsDefault,c as TabsScrollable,L as __namedExportsOrder,K as default};
