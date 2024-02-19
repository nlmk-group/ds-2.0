import{j as a,a as o}from"./clsx.m-3764cf42.js";import{r as s}from"./index-f1f749bf.js";import{a as u}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as t}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{s as m}from"./styles.module-caf3a80a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const p="Компонент Tabs, который объединил в себя Tab элементы",l=r=>a("div",{style:{minHeight:80},children:r()}),_={title:"Components/Tabs/Stories",component:u,decorators:[l],argTypes:{}},e=()=>{const[r,i]=s.useState(0);return o("div",{className:m.wrapper,children:[o(u,{children:[a(u.Tab,{label:"Входящие",active:Number(r)===0,onClick:()=>i(0)}),a(u.Tab,{label:"Мои папки",active:Number(r)===1,onClick:()=>i(1)}),a(u.Tab,{label:"Спам",active:Number(r)===2,onClick:()=>i(2),badgeNumber:"91",children:a(u.Tooltip,{description:"Сюда вы можете добавить текст подсказу для компонента",children:a(u.Icon,{name:"IconInfo16",containerSize:16,htmlColor:"var(--text-grey-500)"})})}),a(u.Tab,{label:"Черновики",active:Number(r)===3,onClick:()=>i(3),badgeNumber:"2"})]}),Number(r)==0&&a(t,{variant:"Heading4",color:"primary",children:"Входящие"}),Number(r)==1&&a(t,{variant:"Heading4",color:"primary",children:"Мои папки"}),Number(r)==2&&a(t,{variant:"Heading4",color:"primary",children:"Спам"}),Number(r)==3&&a(t,{variant:"Heading4",color:"primary",children:"Черновики"})]})};e.storyName=p;var n,c,b;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={styles.wrapper}>
      <Tabs>
        <Tabs.Tab label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} badgeNumber="91">
          <Tabs.Tooltip description="Сюда вы можете добавить текст подсказу для компонента">
            <Tabs.Icon name="IconInfo16" containerSize={16} htmlColor="var(--text-grey-500)" />
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
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const j=["TabsDefault"];export{e as TabsDefault,j as __namedExportsOrder,_ as default};
