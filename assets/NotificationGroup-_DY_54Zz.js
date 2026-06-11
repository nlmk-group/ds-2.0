import{r as c,j as t,m as l,S as u,U as x}from"./iframe-C2j-UzJI.js";import{useMDXComponents as f}from"./index-CnUiOmhK.js";import{N as b}from"./index-CWWsFxD8.js";import{DecoratorDefault as g}from"./Decorator.stories-DBUaiF2k.js";import{s as m,H as y,E as r}from"./Header-CS8Ul-7Z.js";import{F as N}from"./FigmaEmbed-BXpMjOC7.js";import{P as h,T as B}from"./Tests-BzXlcuiS.js";/* empty css               */import{T as e}from"./index-j_056LZh.js";import{a as C}from"./argsTypes-B__a2cMS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EKbY0pty.js";import"./index-P9-ONPUI.js";import"./clsx-B-dksMZM.js";import"./index-D3z7S9ph.js";import"./16-049IwUhX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-B5ODlOpD.js";import"./index-B6CIWydZ.js";import"./index-BI-uMOwr.js";import"./index-Cgs4mkOo.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";import"./index-D9e0IWV-.js";import"./index-yGzPLeeo.js";import"./index-Cm_Ba9v7.js";import"./index-CtJ4Gng-.js";import"./index-DQwYpJV-.js";import"./index-Cdr1B_yf.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRJdSF_u.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DubnQ8iR.js";import"./useFloatingReferenceSync-B9wLGTQm.js";import"./index-DniZBuyb.js";import"./index-mz-Fux1b.js";import"./types-TdnjS80C.js";import"./index-DJNN3joX.js";import"./MenuItem-2rBr_5IO.js";import"./floating-ui.react-B-hVAgIp.js";import"./sizesMapping-D8QavrGc.js";import"./index-BlB3gbyn.js";import"./index-BxD8CrGk.js";import"./index-D--QrFHf.js";import"./index-CNN_3_D-.js";import"./index-DKRZUTnz.js";import"./index-BIghOfGk.js";import"./index-BCWSZamI.js";import"./index-dafhDTNg.js";import"./index-DBzDQ-ch.js";import"./index-AnGV7slG.js";import"./index-Dw3c2VVg.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DZ9AfOMR.js";import"./index-ClEzh6W5.js";import"./index-BpckL99B.js";import"./index-DxVRZIMU.js";import"./index-BYk4kF2r.js";import"./index-p4R0JKbs.js";import"./index-DX43l6l8.js";import"./index-BYjJWpD4.js";import"./index-D_f15RZF.js";import"./index-dHWQfCU4.js";import"./index-B9O-LOtF.js";import"./index-B8k0jrF3.js";import"./index-EikiiVfW.js";import"./index-jAVg74ZN.js";import"./index-DhCmc_-U.js";import"./index-DGfhABU5.js";import"./index-CrdTlCOS.js";import"./index-Cjmo6ss0.js";import"./index-mFyay1Jh.js";import"./index-CFvqY2-I.js";import"./index-CLjZt-U5.js";import"./index-DxU2rFyU.js";import"./index-BztNwpqP.js";import"./index-C3s3_K12.js";import"./index-BPEi8AAc.js";import"./index-nrqGK399.js";import"./index-D_AdWthx.js";import"./index-CC1rooLK.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DqweFzDp.js";import"./index-BP9NHWE2.js";import"./index-DTAmrxZ5.js";import"./index-Cia1E6ra.js";import"./index-C7GKKkXm.js";import"./index-D5Omujth.js";import"./index-CzeiuUcG.js";import"./index-CBv4Ru4y.js";import"./index-CCMQkG81.js";import"./index-BmhtsoHO.js";import"./ComboBox-DginoVkT.js";import"./index-B_pht6vj.js";import"./constants-C_zUGLqh.js";import"./TreeList-CmR72Klg.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationGroup",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Группа карточек уведомлений для истории в Drawer. В свёрнутом виде показывает только верхнюю карточку и намекает на остальные визуальным эффектом «колоды» — двумя срезами из-под неё. Круглая кнопка-тумблер снизу раскрывает всю стопку: карточки появляются каскадом с плавной slide-down анимацией, а при сворачивании уходят обратно такой же slide-up.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:320,description:"NotificationGroup со свойствами по умолчанию.",code:`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

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
