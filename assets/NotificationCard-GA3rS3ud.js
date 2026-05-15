import{r as c,j as t,m as l,S as x,U as u}from"./iframe-D_LYy3fl.js";import{useMDXComponents as g}from"./index-BGCmU5NS.js";import{N as f}from"./index-DPxKDXZx.js";import{DecoratorDefault as b}from"./Decorator.stories-BO1qjJJ1.js";import{s as m,H as y,E as r}from"./Header-BLbLqtI-.js";import{F as h}from"./FigmaEmbed-DSb0w-ZX.js";import{P as B,T as C}from"./Tests-BJKeRIHR.js";/* empty css               */import{T as e}from"./index-B0cY82zJ.js";import{a as N}from"./argsTypes-Czz-eC22.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_cRJjro.js";import"./index-B1PU1CNi.js";import"./clsx-B-dksMZM.js";import"./index-BU_GnhDV.js";import"./16-DJp-l2qz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./16-8C7xLZBI.js";import"./index-BiOm7QyS.js";import"./16-DkYOHGQf.js";import"./index-R8QHUFR1.js";import"./index-Y_-eDXu7.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-DBpiE5RN.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./index-BkmiSUDO.js";import"./index-Q5YcqIYP.js";import"./index-Bj6Bthvm.js";import"./index-BDsANEzD.js";import"./index-yDzNc95d.js";import"./index-B95bsGI0.js";import"./colorsMapping-C6bFIk14.js";import"./index-5PnItkP7.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-oJloIZca.js";import"./useFloatingReferenceSync-DtnNKvIM.js";import"./index-BtP4eAFz.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./index-CzXcIb-j.js";import"./MenuItem-CMiMvsFX.js";import"./floating-ui.react-XEmCJJOr.js";import"./sizesMapping-D8QavrGc.js";import"./index-CLHUbwEU.js";import"./index-BRXpQ6Hr.js";import"./index-D0zaiIGb.js";import"./index-BsdBWJ3a.js";import"./index-CAVMCCtJ.js";import"./index-CMQId7KD.js";import"./index-DqUjQ6V8.js";import"./index-S_LgkFS5.js";import"./index-D3lr74sg.js";import"./index-C3TSEdgN.js";import"./index-B1rmkdDL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cus-K6LR.js";import"./index-BIF_MlAn.js";import"./index-DReekAV_.js";import"./index-P7ZTb--l.js";import"./index-BZOhfber.js";import"./index-CtdZrVFs.js";import"./index-zXTcph7i.js";import"./index-DQYYPt0I.js";import"./index-C3JMqomg.js";import"./index-C_UiSZZG.js";import"./index-lR55cdNn.js";import"./index-D0qqrzz7.js";import"./index-C4C0VBq-.js";import"./index-D0bJ_vk5.js";import"./index-BJJ_y91S.js";import"./index-Bm_nqkYB.js";import"./index-C9OsoAfb.js";import"./index-Bg0Nv3pS.js";import"./index-BrBqwFe2.js";import"./index-C1VUP76c.js";import"./index-B68SVRmH.js";import"./index-D2Bt9vO-.js";import"./index-BJHfEa9h.js";import"./index-BvNJt26d.js";import"./index-BPOlQxyv.js";import"./index-CeTCku7Z.js";import"./index-EATrCG3U.js";import"./index-BNXMfZxy.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-hZhhfzT2.js";import"./index-Dm1Av42Y.js";import"./index-D-Ucr6ou.js";import"./index-DK6KR7s9.js";import"./index-Br2zG6qh.js";import"./index-B32oSB5V.js";import"./index-DVf28Hrl.js";import"./index-DmvA6fX4.js";import"./index-uifo1Fcm.js";import"./index-CTJfTsFr.js";import"./ComboBox-D7VaQLp6.js";import"./index-BUSsu5Rl.js";import"./constants-DVt2R2sY.js";import"./TreeList-B_Os3dVZ.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationCard",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16720-15828",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Большая карточка уведомления для истории в Drawer или Dialog. Содержит заголовок, текст и время, красной точкой помечает непрочитанные. Длинный текст автоматически сворачивается до двух строк — кнопка «Показать больше / Свернуть» появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:260,description:"NotificationCard по умолчанию.",code:`import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default App = () => (
  <Box st={{ maxWidth: 772 }}>
    <NotificationCard
      title="Планирование графика отпусков на следующий год"
      body="Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля."
      timestamp="сегодня, 14:13"
      unread
    />
  </Box>
)`}),t.jsx(r,{minHeight:200,description:"Пример с коротким текстом.",code:`import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default App = () => (
  <Box st={{ maxWidth: 772 }}>
    <NotificationCard
      title="Заявка на отпуск одобрена"
      body="Руководитель согласовал ваш отпуск с 12 по 25 мая."
      timestamp="сегодня, 14:13"
    />
  </Box>
)`}),t.jsx(r,{minHeight:500,description:"NotificationCard в Drawer.",code:`import { useState } from 'react';
import { Badge, Box, Button, Drawer, Header, NotificationCard, Switch, Tabs, Typography } from '@nlmk/ds-2.0';

const tabItems = [
  { label: 'Требуется сделать', count: 2, badgeColor: 'error' },
  { label: 'Важно ознакомиться', count: 7, badgeColor: 'error' },
  { label: 'Для информации', count: 115, badgeColor: 'brand' }
];

const groups = [
  {
    id: '1',
    category: 'График отпусков',
    title: 'Планирование графика отпусков на следующий год',
    unread: true,
    body: 'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля.',
    timestamp: 'сегодня, 14:13'
  },
  {
    id: '2',
    category: 'Обучение',
    title: 'Новый корпоративный курс доступен для записи',
    unread: true,
    body: 'Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00. Количество мест ограничено — успейте записаться до 18 апреля.',
    timestamp: 'сегодня, 11:45'
  }
];

export default App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [unreadOnly, setUnreadOnly] = useState(true);

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header title="Портал сотрудника" showNotification notificationAmount={115} onNotificationClick={() => setIsOpen((p) => !p)} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <Box flexDirection="column" gap={32} st={{ padding: '32px 32px 48px' }} color="var(--steel-90)">
          <Typography variant="Heading2">Уведомления</Typography>

          <Box flexDirection="column" gap={24}>
            <Tabs>
              {tabItems.map((item, idx) => (
                <Tabs.Tab key={item.label} label={item.label} hasBadge badgeChildren={item.count > 99 ? '99+' : item.count} badgeColor={item.badgeColor} active={activeTab === idx} onClick={() => setActiveTab(idx)} />
              ))}
            </Tabs>

            <Box alignItems="center" justifyContent="flex-end" gap={8}>
              <Switch checked={unreadOnly} onChange={() => setUnreadOnly((p) => !p)} />
              <Typography variant="Body1-Medium">Только непрочитанные</Typography>
            </Box>
          </Box>

          <Box flexDirection="column" gap={32}>
            {groups.map((group) => (
              <Box key={group.id} flexDirection="column" gap={16}>
                <Box flexDirection="column" gap={8} py={12}>
                  <Box>
                    <Badge color="brand" variant="solid" size="l">{group.category}</Badge>
                  </Box>
                  <Box alignItems="center" justifyContent="space-between">
                    <Box alignItems="center">
                      <Typography variant="Subheading3-Medium" color="var(--brand-sapphire-50)">{group.title}</Typography>
                    </Box>
                    <Button type="button" size="xs" variant="primary" color="ghost">Отметить все как прочитанные</Button>
                  </Box>
                </Box>
                <NotificationCard title={group.title} body={group.body} timestamp={group.timestamp} unread={group.unread} />
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}`}),t.jsx(r,{minHeight:220,description:"Controlled режим с внешним состоянием раскрытия.",code:`import { useState } from 'react';
import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box st={{ maxWidth: 772 }}>
      <NotificationCard
        title="Новый корпоративный курс доступен для записи"
        body="Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00. Количество мест ограничено — успейте записаться до 18 апреля."
        timestamp="сегодня, 14:13"
        expanded={expanded}
        onExpandedChange={setExpanded}
      />
    </Box>
  );
}`}),t.jsx(B,{argsTypes:N})]}),o==1&&t.jsx(h,{url:n}),o==2&&t.jsx(C,{componentName:a})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/NotificationCard/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16720-15828"},jest:["NotificationCard.test.tsx"]}}),`
`,t.jsx(x,{of:b}),`
`,t.jsx(u,{children:t.jsx(j,{})})]})}function Io(o={}){const{wrapper:i}={...g(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(s,{...o})}):s()}export{Io as default};
