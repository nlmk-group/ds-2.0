import{r as c,j as t,m as l,S as u,U as x}from"./iframe-D1ppCfJL.js";import{useMDXComponents as f}from"./index-DUXc5yr1.js";import{N as b}from"./index-RJYyFZKU.js";import{DecoratorDefault as g}from"./Decorator.stories-Ce4quGEU.js";import{s as m,H as y,E as r}from"./Header-CrzktEKM.js";import{F as N}from"./FigmaEmbed-C7Y9lIWu.js";import{P as h,T as B}from"./Tests-ErrWIcVc.js";/* empty css               */import{T as e}from"./index-DlP1k4gA.js";import{a as C}from"./argsTypes-B__a2cMS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQiorVga.js";import"./index-B8OV2sj9.js";import"./clsx-B-dksMZM.js";import"./index-pBOwR2Sr.js";import"./16-CJBceTE3.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DvGStvE4.js";import"./index-BhAG1mVA.js";import"./index-BbmMdiDL.js";import"./index-1Ia9d37J.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-D3y4eWrN.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./index-BQXeN0eF.js";import"./index-_EnS4SPv.js";import"./index-DCLji6qX.js";import"./colorsMapping-C6bFIk14.js";import"./index-BuboyXZl.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CskC-lf5.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-D1MtTpbs.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./index-dwkJrdOm.js";import"./MenuItem-BiyJ08nY.js";import"./floating-ui.react-DKQvXyy0.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./index-CYVJgBAK.js";import"./index-BwhgPU9I.js";import"./index-DwwGufnW.js";import"./index-DuvGnr4P.js";import"./index-Cn43EhjI.js";import"./index-Dq_AZ4Gl.js";import"./index-BKgG2BUu.js";import"./index-CZz4O3t8.js";import"./index-DDTzxOqr.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Ct8-B2RS.js";import"./index-BtqWnsFW.js";import"./index-DZ1-9d6d.js";import"./index-BPCh3R_L.js";import"./index-CEUVPE5x.js";import"./index-Bsj2pXl4.js";import"./index-BFBGSixy.js";import"./index-DBTyYIq5.js";import"./index-B2DrMXcC.js";import"./index-CD-VGwDt.js";import"./index-Dt9QaNhs.js";import"./index-C3RlDP0j.js";import"./index-D9eBI-ul.js";import"./index-DvVC4LD1.js";import"./index-ppwxfrOJ.js";import"./index-CZI9tviC.js";import"./index-BvPqZPcI.js";import"./index-CHKV4Xzj.js";import"./index-BDHI1vN6.js";import"./index-BYlJK5W5.js";import"./index-BBrdAj2S.js";import"./index-C_PjMrzg.js";import"./index-CV1Omkp3.js";import"./index-BDde93qT.js";import"./index-VSWU4_A4.js";import"./index-CFOhRc1z.js";import"./index-BYVv5Ws0.js";import"./index-CRzaLeVS.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D-Ocfrfd.js";import"./index-CSNQVful.js";import"./index-DrgSnG8u.js";import"./index-BOz-GYvQ.js";import"./index-OW61RsAS.js";import"./index-0w7-TbBZ.js";import"./index-GjSckLp0.js";import"./index-C8eAPz1j.js";import"./index-BZ11wUJ2.js";import"./index-CIHIr33g.js";import"./ComboBox-BIeVukHs.js";import"./index-T1NdoD8u.js";import"./TreeList-COEGgzHL.js";import"./copyToClipboard-DB_KM_BY.js";const p="NotificationGroup",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696",j=()=>{const[o,i]=c.useState(0),a=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:p,description:"Группа карточек уведомлений для истории в Drawer. В свёрнутом виде показывает только верхнюю карточку и намекает на остальные визуальным эффектом «колоды» — двумя срезами из-под неё. Круглая кнопка-тумблер снизу раскрывает всю стопку: карточки появляются каскадом с плавной slide-down анимацией, а при сворачивании уходят обратно такой же slide-up.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:a(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:a(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:320,description:"NotificationGroup со свойствами по умолчанию.",code:`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

const body1 = 'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга.';
const body2 = 'Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00.';
const body3 = 'Бухгалтерия сформировала справку 2-НДФЛ за 2025 год. Документ доступен для скачивания в личном кабинете.';

export default App = () => (
  <Box st={{ maxWidth: 772, padding: 24 }}>
    <NotificationGroup>
      <NotificationCard title="Планирование графика отпусков на следующий год" body={body1} timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Новый корпоративный курс доступен для записи" body={body2} timestamp="сегодня, 12:00" unread />
      <NotificationCard title="Справка 2-НДФЛ за 2025 год готова" body={body3} timestamp="вчера, 18:30" />
    </NotificationGroup>
  </Box>
)`}),t.jsx(r,{minHeight:400,description:"NotificationGroup раскрытый по умолчанию.",code:`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

const body1 = 'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга.';
const body2 = 'Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00.';
const body3 = 'Бухгалтерия сформировала справку 2-НДФЛ за 2025 год. Документ доступен для скачивания в личном кабинете.';

export default App = () => (
  <Box st={{ maxWidth: 772, padding: 24 }}>
    <NotificationGroup defaultOpen>
      <NotificationCard title="Планирование графика отпусков на следующий год" body={body1} timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Новый корпоративный курс доступен для записи" body={body2} timestamp="сегодня, 12:00" unread />
      <NotificationCard title="Справка 2-НДФЛ за 2025 год готова" body={body3} timestamp="вчера, 18:30" />
    </NotificationGroup>
  </Box>
)`}),t.jsx(r,{minHeight:320,description:"NotificationGroup из 2 карточек.",code:`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

export default App = () => (
  <Box st={{ maxWidth: 772, padding: 24 }}>
    <NotificationGroup>
      <NotificationCard title="Заявка на отпуск ожидает согласования" body="Анна Иванова отправила заявку на отпуск с 12 по 25 мая. Требуется ваше согласование." timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Подтвердите участие в тренинге" body="Требуется подтверждение участия в тренинге по тайм-менеджменту 22 апреля." timestamp="сегодня, 12:00" />
    </NotificationGroup>
  </Box>
)`}),t.jsx(r,{minHeight:500,description:"NotificationGroup в Drawer.",code:`import { useState } from 'react';
import { Badge, Box, Button, Drawer, Header, NotificationCard, NotificationGroup, Switch, Tabs, Typography } from '@nlmk/ds-2.0';

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
    cards: [
      { title: 'Планирование графика отпусков на следующий календарный год', body: 'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке.', timestamp: 'сегодня, 14:13', unread: true },
      { title: 'Заявка на отпуск ожидает согласования', body: 'Анна Иванова отправила заявку на отпуск с 12 по 25 мая. Требуется ваше согласование до 10 апреля.', timestamp: 'сегодня, 12:00', unread: true },
      { title: 'Напоминание о сроках согласования', body: 'До окончания срока согласования графика отпусков осталось 5 рабочих дней.', timestamp: 'вчера, 10:00' }
    ]
  },
  {
    id: '2',
    category: 'Обучение',
    title: 'Новый корпоративный курс доступен для записи',
    unread: true,
    cards: [
      { title: 'Запись на курс «Эффективное общение в команде»', body: 'Обучение состоится онлайн 20 апреля с 10:00 до 17:00. Количество мест ограничено — успейте записаться до 18 апреля.', timestamp: 'сегодня, 11:45', unread: true },
      { title: 'Подтверждение участия в тренинге', body: 'Пожалуйста, подтвердите участие в тренинге по тайм-менеджменту 22 апреля.', timestamp: 'сегодня, 11:00', unread: true },
      { title: 'Обновлён каталог курсов', body: 'В каталоге корпоративного обучения появились новые программы по soft skills.', timestamp: '14 апреля, 18:30' }
    ]
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
                <NotificationGroup>
                  {group.cards.map((card, idx) => (
                    <NotificationCard key={idx} title={card.title} body={card.body} timestamp={card.timestamp} unread={card.unread} />
                  ))}
                </NotificationGroup>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}`}),t.jsx(h,{argsTypes:C})]}),o==1&&t.jsx(N,{url:n}),o==2&&t.jsx(B,{componentName:p})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/NotificationGroup/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696"},jest:["NotificationGroup.test.tsx"]}}),`
`,t.jsx(u,{of:g}),`
`,t.jsx(x,{children:t.jsx(j,{})})]})}function Do(o={}){const{wrapper:i}={...f(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(s,{...o})}):s()}export{Do as default};
