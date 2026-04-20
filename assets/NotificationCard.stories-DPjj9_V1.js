import{j as e,R as m}from"./iframe-D1ppCfJL.js";import{B as s}from"./index-D1MtTpbs.js";import{N as d}from"./index-BDHI1vN6.js";import{g as x}from"./styles.module-P9JyAdOG.js";import{a as l}from"./argsTypes-Czz-eC22.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DQiorVga.js";import"./index-B8OV2sj9.js";import"./index-pBOwR2Sr.js";import"./16-m76_vWtK.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./16-CtdeCqSX.js";const u=t=>e.jsx(s,{alignItems:"flex-start",justifyContent:"center",st:{minHeight:"300px",marginTop:"40px",borderRadius:"10px",padding:"24px"},className:x.wrapper,children:e.jsx(t,{})}),L={title:"Components/NotificationCard/Stories",component:d,decorators:[u],argTypes:l},n="Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля.",a=t=>{const[c,p]=m.useState(t.expanded??!1);return m.useEffect(()=>{p(t.expanded??!1)},[t.expanded]),e.jsx(s,{st:{maxWidth:772,width:"100%"},children:e.jsx(d,{title:t.title,body:t.body,timestamp:t.timestamp,unread:t.unread,showMoreLabel:t.showMoreLabel,hideLabel:t.hideLabel,expanded:c,onExpandedChange:p})})};a.storyName="NotificationCard по умолчанию";a.args={title:"Планирование графика отпусков на следующий год",body:n,timestamp:"сегодня, 14:13",unread:!0,expanded:!1};const r=()=>e.jsx(s,{st:{maxWidth:772,width:"100%"},children:e.jsx(d,{title:"Заявка на отпуск одобрена",body:"Руководитель согласовал ваш отпуск с 12 по 25 мая.",timestamp:"сегодня, 14:13"})});r.storyName="Короткий текст";r.parameters={controls:{disable:!0}};const o=()=>e.jsx(s,{st:{maxWidth:772,width:"100%"},children:e.jsx(d,{title:"Новый корпоративный курс доступен для записи",body:n,timestamp:"сегодня, 14:13",unread:!0,defaultExpanded:!0})});o.storyName="NotificationCard развёрнутый контент";o.parameters={controls:{disable:!0}};const i=()=>e.jsx(s,{st:{maxWidth:772,width:"100%"},children:e.jsx(d,{title:"Справка 2-НДФЛ за 2025 год готова",body:n,timestamp:"вчера, 10:00"})});i.storyName="NotificationCard прочитанное уведомление";i.parameters={controls:{disable:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: INotificationCardProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(argTypes.expanded ?? false);
  React.useEffect(() => {
    setExpanded(argTypes.expanded ?? false);
  }, [argTypes.expanded]);
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationCard title={argTypes.title} body={argTypes.body} timestamp={argTypes.timestamp} unread={argTypes.unread} showMoreLabel={argTypes.showMoreLabel} hideLabel={argTypes.hideLabel} expanded={expanded} onExpandedChange={setExpanded} />
    </Box>;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationCard title="Заявка на отпуск одобрена" body="Руководитель согласовал ваш отпуск с 12 по 25 мая." timestamp="сегодня, 14:13" />
    </Box>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationCard title="Новый корпоративный курс доступен для записи" body={longBody} timestamp="сегодня, 14:13" unread defaultExpanded />
    </Box>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationCard title="Справка 2-НДФЛ за 2025 год готова" body={longBody} timestamp="вчера, 10:00" />
    </Box>;
}`,...i.parameters?.docs?.source}}};const R=["DefaultNotificationCard","NotificationCardShort","NotificationCardExpanded","NotificationCardRead"];export{a as DefaultNotificationCard,o as NotificationCardExpanded,i as NotificationCardRead,r as NotificationCardShort,R as __namedExportsOrder,L as default};
