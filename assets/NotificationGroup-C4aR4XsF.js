import{r as c,j as t,m as l,S as u,U as x}from"./iframe-Bo4nALm7.js";import{useMDXComponents as f}from"./index-CNvPJL2u.js";import{N as b}from"./index-t_AVc4Gt.js";import{DecoratorDefault as g}from"./Decorator.stories-C3iA9RHT.js";import{s as m,H as y,E as r}from"./Header-Bi47uln5.js";import{F as N}from"./FigmaEmbed-CwaUbb0p.js";import{P as h,T as B}from"./Tests-CBVV_6V2.js";/* empty css               */import{T as e}from"./index-DX_ysYvL.js";import{a as C}from"./argsTypes-B__a2cMS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdFgkFQG.js";import"./index-CUIhMP_o.js";import"./clsx-B-dksMZM.js";import"./index-DcKSVsFY.js";import"./16-aMqW81vf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BfwlYFIe.js";import"./index-CRs1WgNz.js";import"./index-BBFxLaJS.js";import"./index-DUNZSITs.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-85pGpdFN.js";import"./24-DO_3r_fK.js";import"./24-BysagIQq.js";import"./24-D5XAI_AH.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./24-Blxmuo2i.js";import"./24-C8hAPZTM.js";import"./16-BT8X9gPM.js";import"./16-CUTQAt8-.js";import"./16-BgwH21Xk.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";import"./index-cy5tNcXH.js";import"./index-C-nYBGLl.js";import"./index-DMp9sWPh.js";import"./index-D9HYjQb0.js";import"./index-DDZBgTK0.js";import"./index-Bk9qrNZ3.js";import"./colorsMapping-C6bFIk14.js";import"./index-rp9NcFhw.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-yK1xfIEO.js";import"./useFloatingReferenceSync-Bw3HtT9W.js";import"./index-CptZomEK.js";import"./index-BOLRlznn.js";import"./types-TdnjS80C.js";import"./index-i6hjNmeh.js";import"./MenuItem-Bua9EO5H.js";import"./floating-ui.react-C906_DDE.js";import"./sizesMapping-D8QavrGc.js";import"./index-CiQrrBbP.js";import"./index-D1TI5Y5u.js";import"./index-5mM__hj5.js";import"./index-xjOxjbir.js";import"./index-DFP8AFjH.js";import"./index-Yu4XOZcE.js";import"./index-BcObFQTT.js";import"./index-DLmt8FUL.js";import"./index-Cnz5MgXS.js";import"./index-Cb5WN4nC.js";import"./index-CiKGUfYn.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DLNO0Sc-.js";import"./index-BH32iLo9.js";import"./index-Bi6e8oFp.js";import"./index-DZcyuWQ6.js";import"./index-DCWDgjRo.js";import"./index-R1K1l0qL.js";import"./index-D0KUbv5S.js";import"./index-Cq5dlaEe.js";import"./index-BE9G9-1L.js";import"./index-BMsjPRPD.js";import"./index-BVqpk8_K.js";import"./index-BFSn3M6J.js";import"./index-C-aAOGaG.js";import"./index-B6633_5K.js";import"./index-KMoa1m14.js";import"./index-U5t1T9aa.js";import"./index-BKl3Bi28.js";import"./index-Dg2gdaVK.js";import"./index-DyD8r78B.js";import"./index-Bi15G151.js";import"./index-CjPvelGF.js";import"./index-BIa2fxZk.js";import"./index-CVumvtuI.js";import"./index-DF-bDP0l.js";import"./index-BLcxd_1e.js";import"./index-9uW_AGTn.js";import"./index-A-Ir1b2D.js";import"./index-CXj-YKM1.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CNR-ofzU.js";import"./index-DZkdzlJ9.js";import"./index-C9Wj5XRW.js";import"./index-B36MGRax.js";import"./index-B9qru-GC.js";import"./index-pRNUvCjI.js";import"./index-BURAcp9Z.js";import"./index-Cs7fUJPF.js";import"./index-C1iGHzcO.js";import"./index-CgLFB2Hb.js";import"./ComboBox-BaEbyY7G.js";import"./index-BWYedRL0.js";import"./index-Xr1AR9qo.js";import"./TreeList-DpVIVhWV.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationGroup",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Группа карточек уведомлений для истории в Drawer. В свёрнутом виде показывает только верхнюю карточку и намекает на остальные визуальным эффектом «колоды» — двумя срезами из-под неё. Круглая кнопка-тумблер снизу раскрывает всю стопку: карточки появляются каскадом с плавной slide-down анимацией, а при сворачивании уходят обратно такой же slide-up.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:320,description:"NotificationGroup со свойствами по умолчанию.",code:`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

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
}`}),t.jsx(h,{argsTypes:C})]}),o==1&&t.jsx(N,{url:n}),o==2&&t.jsx(B,{componentName:a})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/NotificationGroup/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696"},jest:["NotificationGroup.test.tsx"]}}),`
`,t.jsx(u,{of:g}),`
`,t.jsx(x,{children:t.jsx(j,{})})]})}function Io(o={}){const{wrapper:i}={...f(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(s,{...o})}):s()}export{Io as default};
