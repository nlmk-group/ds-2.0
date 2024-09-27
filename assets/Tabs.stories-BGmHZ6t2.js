import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as d}from"./index-DQ2WTIsS.js";import{a0 as r}from"./index-CMhB4zJG.js";import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import{T as l}from"./index-ehXB0alm.js";import"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import{s as b}from"./styles.module-BSI8LUpZ.js";import{c as g}from"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const y="Компонент Tabs, который объединил в себя Tab элементы",N="Компонент Tabs c горизонтальным скроллом",h=a=>e.jsx("div",{style:{minHeight:80},children:a()}),J={title:"Components/Tabs/Stories",component:r,decorators:[h],argTypes:{}},i=()=>{const[a,o]=d.useState(0);return e.jsxs("div",{className:b.wrapper,children:[e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Входящие",active:Number(a)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Мои папки",active:Number(a)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Спам",active:Number(a)===2,onClick:()=>o(2),badgeNumber:"91",children:e.jsx(r.Tooltip,{render:e.jsx(l,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:e.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--text-grey-500)"})})}),e.jsx(r.Tab,{label:"Черновики",active:Number(a)===3,onClick:()=>o(3),badgeNumber:"2"})]}),Number(a)==0&&e.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(a)==1&&e.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(a)==2&&e.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(a)==3&&e.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})},n=[{value:0,label:"Входящие"},{value:1,label:"Мои папки"},{value:2,label:"Спам",badgeNumber:"91",tooltip:"Сюда вы можете добавить текст подсказу для компонента"},{value:3,label:"Черновики",badgeNumber:"2"},{value:4,label:"Отправленные",badgeNumber:"23"},{value:5,label:"Избранное",badgeNumber:"31"},{value:6,label:"Отмеченное",badgeNumber:"4"},{value:7,label:"Коллекция",badgeNumber:"10"}],s=()=>{const[a,o]=d.useState(0);return e.jsxs("div",{className:g(b.wrapper,b["wrapper--small"]),children:[e.jsx(r,{scrollable:!0,children:n.map(t=>e.jsx(r.Tab,{label:t.label,active:t.value===Number(a),onClick:()=>o(t.value),badgeNumber:t.badgeNumber,children:t.tooltip?e.jsx(r.Tooltip,{render:e.jsx(l,{variant:"Caption-Medium",children:t.tooltip}),children:e.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--text-grey-500)"})}):void 0},t.label))}),n.map(t=>Number(a)===t.value&&e.jsx(l,{variant:"Heading4",color:"var(--steel-90)",children:t.label},t.label))]})};i.storyName=y;s.storyName=N;var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={styles.wrapper}>
      <Tabs>
        <Tabs.Tab label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} badgeNumber="91">
          <Tabs.Tooltip render={<Typography variant="Caption-Medium">Сюда вы можете добавить текст подсказу для компонента</Typography>}>
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab label="Черновики" active={3 === Number(activeTab)} onClick={() => setActiveTab(3)} badgeNumber="2" />
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var T,v,u;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={clsx(styles.wrapper, styles['wrapper--small'])}>
      <Tabs scrollable>
        {tabItems.map(item => <Tabs.Tab key={item.label} label={item.label} active={item.value === Number(activeTab)} onClick={() => setActiveTab(item.value)} badgeNumber={item.badgeNumber}>
            {item.tooltip ? <Tabs.Tooltip render={<Typography variant="Caption-Medium">{item.tooltip}</Typography>}>
                <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
              </Tabs.Tooltip> : undefined}
          </Tabs.Tab>)}
      </Tabs>

      {tabItems.map(item => Number(activeTab) === item.value && <Typography variant="Heading4" color="var(--steel-90)" key={item.label}>
          {item.label}
        </Typography>)}
    </div>;
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const P=["TabsDefault","TabsScrollable"];export{i as TabsDefault,s as TabsScrollable,P as __namedExportsOrder,J as default};
