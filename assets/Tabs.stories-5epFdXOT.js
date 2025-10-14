import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as b}from"./index-BcJSXhQi.js";import{c as p,ah as r}from"./TreeList-BjeWiidJ.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as i}from"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{g as C}from"./styles.module-m0Zsy3Hi.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const j="_wrapper_1e6d7_1",f={wrapper:j},S={children:{description:"Вложенные элементы, которые будут отображаться в табах",control:{type:"object"}},className:{description:"CSS класс для настройки стилей компонента",control:{type:"text"}},scrollable:{description:"Флаг, указывающий, разрешено ли горизонтальное скроллирование вкладок",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},label:{description:"Текст метки для таба",control:{type:"text"}},active:{description:"Флаг, указывающий, активен ли текущий таб",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},hasBadge:{description:"Флаг, указывающий, должен ли таб отображать бейдж",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},badgeChildren:{description:"Содержимое Badge",control:{type:"text"}},badgeColor:{description:"Заливка бейджа",options:Object.values(p),control:{type:"select"}},hasIcon:{description:"Флаг, указывающий, должен ли таб отображать иконку",control:{type:"boolean"},table:{defaultValue:{summary:!1}}}},I=t=>e.jsx("div",{className:f.wrapper,children:e.jsx(t,{})}),U={title:"Components/Tabs/Stories",component:r,decorators:[I],argTypes:S},s=t=>{const[a,l]=b.useState(0);return e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsx(r.Tab,{...t,label:"Входящие",active:Number(a)===0,onClick:()=>l(0)}),e.jsx(r.Tab,{...t,label:"Черновики",active:Number(a)===1,onClick:()=>l(1)})]}),Number(a)==0&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(a)==1&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"})]})};s.storyName="Один таб с наглядными контролами";s.args={hasBadge:!0,hasIcon:!0,badgeChildren:"11",badgeColor:p.brand};const n=t=>{const[a,l]=b.useState(0);return e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsx(r.Tab,{...t,label:"Входящие",active:Number(a)===0,onClick:()=>l(0)}),e.jsx(r.Tab,{...t,label:"Мои папки",active:Number(a)===1,onClick:()=>l(1)}),e.jsx(r.Tab,{...t,label:"Спам",active:Number(a)===2,hasBadge:!0,onClick:()=>l(2),badgeChildren:10,badgeColor:p.brand,children:e.jsx(r.Tooltip,{render:e.jsx(i,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:e.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})})}),e.jsx(r.Tab,{...t,label:"Черновики",active:Number(a)===3,onClick:()=>l(3)})]}),Number(a)==0&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(a)==1&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(a)==2&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(a)==3&&e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})};n.storyName="Дефолтные табы";const m=[{value:0,label:"Входящие"},{value:1,label:"Мои папки"},{value:2,label:"Спам",tooltip:"Сюда вы можете добавить текст подсказу для компонента"},{value:3,label:"Черновики"},{value:4,label:"Отправленные"},{value:5,label:"Избранное"},{value:6,label:"Отмеченное"},{value:7,label:"Коллекция"}],c=t=>{const[a,l]=b.useState(0);return e.jsxs("div",{className:C["wrapper--small"],children:[e.jsx(r,{scrollable:!0,children:m.map(o=>b.createElement(r.Tab,{...t,key:o.label,label:o.label,active:o.value===Number(a),onClick:()=>l(o.value)},o.tooltip?e.jsx(r.Tooltip,{render:e.jsx(i,{variant:"Caption-Medium",children:o.tooltip}),children:e.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--steel-50)"})}):void 0))}),m.map(o=>Number(a)===o.value&&e.jsx("div",{style:{marginTop:"10px"},children:e.jsx(i,{variant:"Heading4",color:"var(--steel-90)",children:o.label},o.label)}))]})};c.storyName="Табы с возможностью скролла";var v,d,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
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
}`,...(T=(d=s.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`(args: ITabProps): JSX.Element => {
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,x,N;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ITabProps) => {
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
}`,...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const Y=["TabDefault","TabsDefault","TabsScrollable"];export{s as TabDefault,n as TabsDefault,c as TabsScrollable,Y as __namedExportsOrder,U as default};
