import{j as t,R as d}from"./iframe-BYEcINU_.js";import{E as x,B as C}from"./index-CrpGn3Cf.js";import{B as o}from"./index-D6OuuQjE.js";import{B as v}from"./index-DEnU3uQc.js";import{D as T}from"./index-7AUFuuQ2.js";import{H as G}from"./index-C3exR97g.js";import{N as c}from"./index-DNO6SmUQ.js";import{N as l}from"./index-atP-xhLu.js";import{S as w}from"./index-Dbavy875.js";import{T as g}from"./index-nj7VEw_R.js";import{T as f}from"./index-CTms4VQ3.js";import{g as O}from"./styles.module-P9JyAdOG.js";import{a as D}from"./argsTypes-B__a2cMS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-TdnjS80C.js";import"./24-DTKLnnJ8.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./localeMapping-Cf4j9Ek8.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./colorsMapping-C6bFIk14.js";import"./sizesMapping-D8QavrGc.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./16-BbOPmjLm.js";import"./24-qZuYAR8B.js";import"./index-aRgZryTI.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./index-Bzsm1X0Z.js";import"./index-CyD8HQ96.js";import"./generateUUID-M57HTP56.js";const S=r=>t.jsx(o,{alignItems:"flex-start",justifyContent:"center",st:{minHeight:"400px",marginTop:"40px",borderRadius:"10px",padding:"24px"},className:O.wrapper,children:t.jsx(r,{})}),Gt={title:"Components/NotificationGroup/Stories",component:l,decorators:[S],argTypes:D},I="Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования.",k="Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00. Количество мест ограничено — успейте записаться до 18 апреля.",R="Бухгалтерия сформировала справку 2-НДФЛ за 2025 год. Документ доступен для скачивания в личном кабинете. Электронная подпись действительна в течение 30 дней.",E="Ваша заявка на удалённую работу 15 апреля одобрена руководителем. Не забудьте заранее подготовить доступ к корпоративным сервисам через VPN.",y=[t.jsx(c,{title:"Планирование графика отпусков на следующий год",body:I,timestamp:"сегодня, 14:13",unread:!0},"1"),t.jsx(c,{title:"Новый корпоративный курс доступен для записи",body:k,timestamp:"сегодня, 12:00",unread:!0},"2"),t.jsx(c,{title:"Справка 2-НДФЛ за 2025 год готова",body:R,timestamp:"вчера, 18:30"},"3")],a=r=>{const[m,u]=d.useState(r.open??!1);return d.useEffect(()=>{u(r.open??!1)},[r.open]),t.jsx(o,{st:{maxWidth:772,width:"100%"},children:t.jsx(l,{open:m,onOpenChange:u,children:y})})};a.storyName="NotificationGroup по умолчанию";a.args={open:!1};const n=()=>t.jsx(o,{st:{maxWidth:772,width:"100%"},children:t.jsx(l,{defaultOpen:!0,children:y})});n.storyName="NotificationGroup раскрытый по умолчанию";n.parameters={controls:{disable:!0}};const s=()=>t.jsx(o,{st:{maxWidth:772,width:"100%"},children:t.jsxs(l,{children:[t.jsx(c,{title:"Заявка на удалённую работу одобрена",body:E,timestamp:"сегодня, 14:13",unread:!0}),t.jsx(c,{title:"Подтвердите участие в тренинге",body:"Требуется подтверждение участия в тренинге по тайм-менеджменту 22 апреля.",timestamp:"сегодня, 12:00"})]})});s.storyName="NotificationGroup из 2 карточек";s.parameters={controls:{disable:!0}};const h="Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля.",W=[{id:"1",category:"График отпусков",title:"Планирование графика отпусков на следующий год",unread:!0,cards:[{title:"Планирование графика отпусков на следующий календарный год",body:h,timestamp:"сегодня, 14:13",unread:!0},{title:"Напоминание о согласовании графика",body:"Напоминаем, что до окончания срока согласования графика отпусков на 2026 год осталось 5 рабочих дней. Пожалуйста, не забудьте подтвердить даты.",timestamp:"вчера, 10:00",unread:!0},{title:"Обновление регламента согласования",body:"Обновлён регламент согласования графика отпусков: теперь подтверждение возможно в том числе из мобильного приложения.",timestamp:"14 апреля, 18:30"}]},{id:"2",category:"График отпусков",title:"Планирование графика отпусков на следующий год сотрудника",unread:!0,cards:[{title:"Планирование графика отпусков на следующий календарный год",body:h,timestamp:"сегодня, 14:13",unread:!0},{title:"Запрос на перенос дат отпуска",body:"Сотрудник Соколов А.В. запросил перенос отпуска с июля на сентябрь. Пожалуйста, согласуйте или отклоните запрос в сервисе.",timestamp:"сегодня, 11:42",unread:!0}]}],H=[{label:"Требуется сделать",count:2,badgeColor:x.error},{label:"Важно ознакомиться",count:7,badgeColor:x.error},{label:"Для информации",count:115,badgeColor:x.brand}],p=()=>{const[r,m]=d.useState(!0),[u,b]=d.useState(0),[B,j]=d.useState(!0);return t.jsxs(o,{st:{position:"relative",width:"100%"},children:[t.jsx(G,{title:"Портал сотрудника",showNotification:!0,notificationAmount:115,onNotificationClick:()=>m(e=>!e)}),t.jsx(T,{isOpen:r,onClose:()=>m(!1),position:"right",width:"820px",children:t.jsxs(o,{flexDirection:"column",gap:32,st:{padding:"32px 32px 48px"},color:"var(--steel-90)",children:[t.jsx(f,{variant:"Heading2",children:"Уведомления"}),t.jsxs(o,{flexDirection:"column",gap:16,children:[t.jsx(g,{children:H.map((e,i)=>t.jsx(g.Tab,{label:e.label,hasBadge:!0,badgeChildren:e.count>99?"99+":e.count,badgeColor:e.badgeColor,active:u===i,onClick:()=>b(i)},e.label))}),t.jsxs(o,{alignItems:"center",justifyContent:"flex-end",gap:8,children:[t.jsx(w,{checked:B,onChange:()=>j(e=>!e)}),t.jsx(f,{variant:"Body1-Medium",children:"Только непрочитанные"})]})]}),t.jsx(o,{flexDirection:"column",gap:32,children:W.map(e=>t.jsxs(o,{flexDirection:"column",gap:16,children:[t.jsxs(o,{flexDirection:"column",gap:8,py:12,children:[t.jsx(o,{children:t.jsx(C,{color:x.brand,variant:"solid",size:"l",children:e.category})}),t.jsxs(o,{alignItems:"center",justifyContent:"space-between",children:[t.jsx(o,{alignItems:"center",children:t.jsx(f,{variant:"Subheading3-Medium",color:"var(--brand-sapphire-50)",children:e.title})}),t.jsx(v,{type:"button",size:"xs",variant:"primary",color:"ghost",children:"Отметить все как прочитанные"})]})]}),t.jsx(l,{children:e.cards.map((i,N)=>t.jsx(c,{title:i.title,body:i.body,timestamp:i.timestamp,unread:i.unread},N))})]},e.id))})]})})]})};p.storyName="NotificationGroup в Drawer";p.parameters={controls:{disable:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: INotificationGroupProps) => {
  const [open, setOpen] = React.useState<boolean>(argTypes.open ?? false);
  React.useEffect(() => {
    setOpen(argTypes.open ?? false);
  }, [argTypes.open]);
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationGroup open={open} onOpenChange={setOpen}>
        {cards}
      </NotificationGroup>
    </Box>;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationGroup defaultOpen>{cards}</NotificationGroup>
    </Box>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Box st={{
    maxWidth: 772,
    width: '100%'
  }}>
      <NotificationGroup>
        <NotificationCard title="Заявка на удалённую работу одобрена" body={body4} timestamp="сегодня, 14:13" unread />
        <NotificationCard title="Подтвердите участие в тренинге" body="Требуется подтверждение участия в тренинге по тайм-менеджменту 22 апреля." timestamp="сегодня, 12:00" />
      </NotificationGroup>
    </Box>;
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(0);
  const [unreadOnly, setUnreadOnly] = React.useState(true);
  return <Box st={{
    position: 'relative',
    width: '100%'
  }}>
      <Header title="Портал сотрудника" showNotification notificationAmount={115} onNotificationClick={() => setIsOpen(prev => !prev)} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <Box flexDirection="column" gap={32} st={{
        padding: '32px 32px 48px'
      }} color="var(--steel-90)">
          <Typography variant="Heading2">Уведомления</Typography>

          <Box flexDirection="column" gap={16}>
            <Tabs>
              {tabItems.map((item, index) => <Tabs.Tab key={item.label} label={item.label} hasBadge badgeChildren={item.count > 99 ? '99+' : item.count} badgeColor={item.badgeColor} active={activeTab === index} onClick={() => setActiveTab(index)} />)}
            </Tabs>

            <Box alignItems="center" justifyContent="flex-end" gap={8}>
              <Switch checked={unreadOnly} onChange={() => setUnreadOnly(prev => !prev)} />
              <Typography variant="Body1-Medium">Только непрочитанные</Typography>
            </Box>
          </Box>

          <Box flexDirection="column" gap={32}>
            {mockNotificationGroups.map(group => <Box key={group.id} flexDirection="column" gap={16}>
                <Box flexDirection="column" gap={8} py={12}>
                  <Box>
                    <Badge color={EBadgeColors.brand} variant="solid" size="l">
                      {group.category}
                    </Badge>
                  </Box>
                  <Box alignItems="center" justifyContent="space-between">
                    <Box alignItems="center">
                      <Typography variant="Subheading3-Medium" color="var(--brand-sapphire-50)">
                        {group.title}
                      </Typography>
                    </Box>
                    <Button type="button" size="xs" variant="primary" color="ghost">
                      Отметить все как прочитанные
                    </Button>
                  </Box>
                </Box>
                <NotificationGroup>
                  {group.cards.map((card, idx) => <NotificationCard key={idx} title={card.title} body={card.body} timestamp={card.timestamp} unread={card.unread} />)}
                </NotificationGroup>
              </Box>)}
          </Box>
        </Box>
      </Drawer>
    </Box>;
}`,...p.parameters?.docs?.source}}};const wt=["DefaultNotificationGroup","NotificationGroupOpen","NotificationGroupTwo","NotificationGroupInDrawer"];export{a as DefaultNotificationGroup,p as NotificationGroupInDrawer,n as NotificationGroupOpen,s as NotificationGroupTwo,wt as __namedExportsOrder,Gt as default};
