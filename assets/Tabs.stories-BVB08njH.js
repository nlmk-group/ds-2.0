import{j as a,a as o}from"./jsx-runtime-2xDJh5tt.js";import{r as s}from"./index-CBqU2yxZ.js";import{y as u}from"./index-BTGymsfC.js";import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import"./index-BqvJ5JrJ.js";import{T as t}from"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{s as m}from"./styles.module-DeLvTIFi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";const p="Компонент Tabs, который объединил в себя Tab элементы",l=r=>a("div",{style:{minHeight:80},children:r()}),w={title:"Components/Tabs/Stories",component:u,decorators:[l],argTypes:{}},e=()=>{const[r,i]=s.useState(0);return o("div",{className:m.wrapper,children:[o(u,{children:[a(u.Tab,{label:"Входящие",active:Number(r)===0,onClick:()=>i(0)}),a(u.Tab,{label:"Мои папки",active:Number(r)===1,onClick:()=>i(1)}),a(u.Tab,{label:"Спам",active:Number(r)===2,onClick:()=>i(2),badgeNumber:"91",children:a(u.Tooltip,{description:"Сюда вы можете добавить текст подсказу для компонента",children:a(u.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--text-grey-500)"})})}),a(u.Tab,{label:"Черновики",active:Number(r)===3,onClick:()=>i(3),badgeNumber:"2"})]}),Number(r)==0&&a(t,{variant:"Heading4",color:"primary",children:"Входящие"}),Number(r)==1&&a(t,{variant:"Heading4",color:"primary",children:"Мои папки"}),Number(r)==2&&a(t,{variant:"Heading4",color:"primary",children:"Спам"}),Number(r)==3&&a(t,{variant:"Heading4",color:"primary",children:"Черновики"})]})};e.storyName=p;var n,c,b;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={styles.wrapper}>
      <Tabs>
        <Tabs.Tab label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} badgeNumber="91">
          <Tabs.Tooltip description="Сюда вы можете добавить текст подсказу для компонента">
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab label="Черновики" active={3 === Number(activeTab)} onClick={() => setActiveTab(3)} badgeNumber="2" />
      </Tabs>

      {Number(activeTab) == 0 && <Typography variant="Heading4" color="primary">
          Входящие
        </Typography>}
      {Number(activeTab) == 1 && <Typography variant="Heading4" color="primary">
          Мои папки
        </Typography>}
      {Number(activeTab) == 2 && <Typography variant="Heading4" color="primary">
          Спам
        </Typography>}
      {Number(activeTab) == 3 && <Typography variant="Heading4" color="primary">
          Черновики
        </Typography>}
    </div>;
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const O=["TabsDefault"];export{e as TabsDefault,O as __namedExportsOrder,w as default};
