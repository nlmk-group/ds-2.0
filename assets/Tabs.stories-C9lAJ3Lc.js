import{j as a}from"./jsx-runtime-DFnSfiB4.js";import{r as c}from"./index-DQ2WTIsS.js";import{Y as r}from"./index-DLauUNt7.js";import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as t}from"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import"./32-CCQbJusC.js";import{s as l}from"./styles.module-CTgVy8kC.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const m="Компонент Tabs, который объединил в себя Tab элементы",p=e=>a.jsx("div",{style:{minHeight:80},children:e()}),O={title:"Components/Tabs/Stories",component:r,decorators:[p],argTypes:{}},i=()=>{const[e,o]=c.useState(0);return a.jsxs("div",{className:l.wrapper,children:[a.jsxs(r,{children:[a.jsx(r.Tab,{label:"Входящие",active:Number(e)===0,onClick:()=>o(0)}),a.jsx(r.Tab,{label:"Мои папки",active:Number(e)===1,onClick:()=>o(1)}),a.jsx(r.Tab,{label:"Спам",active:Number(e)===2,onClick:()=>o(2),badgeNumber:"91",children:a.jsx(r.Tooltip,{render:a.jsx(t,{variant:"Caption-Medium",children:"Сюда вы можете добавить текст подсказу для компонента"}),children:a.jsx(r.Icon,{name:"IconInfoOutlined16",containerSize:16,htmlColor:"var(--text-grey-500)"})})}),a.jsx(r.Tab,{label:"Черновики",active:Number(e)===3,onClick:()=>o(3),badgeNumber:"2"})]}),Number(e)==0&&a.jsx(t,{variant:"Heading4",color:"var(--steel-90)",children:"Входящие"}),Number(e)==1&&a.jsx(t,{variant:"Heading4",color:"var(--steel-90)",children:"Мои папки"}),Number(e)==2&&a.jsx(t,{variant:"Heading4",color:"var(--steel-90)",children:"Спам"}),Number(e)==3&&a.jsx(t,{variant:"Heading4",color:"var(--steel-90)",children:"Черновики"})]})};i.storyName=m;var n,s,b;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(b=(s=i.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};const z=["TabsDefault"];export{i as TabsDefault,z as __namedExportsOrder,O as default};
