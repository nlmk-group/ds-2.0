import{j as a,a as o}from"./jsx-runtime-2xDJh5tt.js";import{r as m}from"./index-CBqU2yxZ.js";import{J as e}from"./index-CTSkFh7q.js";import"./generateUUID-B5cPxuxR.js";import"./index-CcmeEFL2.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as u}from"./index-nWYpQihe.js";import"./index-D_LOBm7Z.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-DkuQRQ9j.js";import"./32-C0P3XX_L.js";import{s as p}from"./styles.module-DeLvTIFi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";const s="Компонент Tabs, который объединил в себя Tab элементы",l=r=>a("div",{style:{minHeight:80},children:r()}),O={title:"Components/Tabs/Stories",component:e,decorators:[l],argTypes:{}},i=()=>{const[r,t]=m.useState(0);return o("div",{className:p.wrapper,children:[o(e,{children:[a(e.Tab,{label:"Входящие",active:Number(r)===0,onClick:()=>t(0)}),a(e.Tab,{label:"Мои папки",active:Number(r)===1,onClick:()=>t(1)}),a(e.Tab,{label:"Спам",active:Number(r)===2,onClick:()=>t(2),badgeNumber:"91",children:a(e.Tooltip,{render:a(u,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:a(e.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--text-grey-500)"})})}),a(e.Tab,{label:"Черновики",active:Number(r)===3,onClick:()=>t(3),badgeNumber:"2"})]}),Number(r)==0&&a(u,{variant:"Heading4",color:"primary",children:"Входящие"}),Number(r)==1&&a(u,{variant:"Heading4",color:"primary",children:"Мои папки"}),Number(r)==2&&a(u,{variant:"Heading4",color:"primary",children:"Спам"}),Number(r)==3&&a(u,{variant:"Heading4",color:"primary",children:"Черновики"})]})};i.storyName=s;var n,b,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className={styles.wrapper}>
      <Tabs>
        <Tabs.Tab label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} badgeNumber="91">
          <Tabs.Tooltip render={<Typography variant='Caption-Medium'>Сюда вы можете добавить текст подсказу для компонента</Typography>}>
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
}`,...(c=(b=i.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const z=["TabsDefault"];export{i as TabsDefault,z as __namedExportsOrder,O as default};
