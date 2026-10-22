import{r as c,j as t,m as l,S as u,U as x}from"./iframe-DJB5J1Gm.js";import{useMDXComponents as f}from"./index-Ctdy7DcM.js";import{N as b}from"./index-DvdMLPTa.js";import{DecoratorDefault as g}from"./Decorator.stories-CLu9BKsp.js";import{s as m,H as y,E as r}from"./Header-DtfMJKVh.js";import{F as N}from"./FigmaEmbed-DChIjyS1.js";import{P as h,T as B}from"./Tests-Dnz3uSUu.js";/* empty css               */import{T as e}from"./index-K-Os3Mkv.js";import{a as C}from"./argsTypes-B__a2cMS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-27Xu9hjA.js";import"./index-CQWz6SQ_.js";import"./clsx-B-dksMZM.js";import"./index-BcIuHaz8.js";import"./16-B11CXHkV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DKN-2bNd.js";import"./index-BnjgdTIo.js";import"./index-BTlJCBjo.js";import"./index-CiWWQHM4.js";import"./32-DwqdcbQV.js";import"./32-GoS4XOF1.js";import"./24-OO9CWz_o.js";import"./24-Ds_njt3X.js";import"./24-BJ1WZVGw.js";import"./24-ytII2ozW.js";import"./24-Bh7XmxMn.js";import"./24-DhKB3mvd.js";import"./24-CU8ORY4X.js";import"./24-Bfhp3VeF.js";import"./24-DGoSPibJ.js";import"./24-DTEPByrl.js";import"./16-DeFHhMUc.js";import"./16-faObEf2T.js";import"./16-CJ_ZU7zi.js";import"./16-CLl9DOT8.js";import"./16-BA4929Um.js";import"./index-DK9ZFXds.js";import"./index-C1EZBTl0.js";import"./index-DL3eBH-P.js";import"./index-Bf78mEfz.js";import"./index-DwnOefxr.js";import"./index-C1y8duee.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRGi1AEL.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-1gFuoChe.js";import"./useFloatingReferenceSync-LO62TbyM.js";import"./index-DcVLIfyB.js";import"./index-aBKmaxH3.js";import"./types-TdnjS80C.js";import"./index-6RvY6v79.js";import"./MenuItem-CYKzA5fc.js";import"./floating-ui.react-BitOEuDU.js";import"./sizesMapping-D8QavrGc.js";import"./index-CsNOcf0o.js";import"./index-CD8aF-OU.js";import"./index-BuTn90Kx.js";import"./index-CHjGJJzX.js";import"./index-DAf--LqM.js";import"./index-1fbwNQxU.js";import"./index-C_3lvTrt.js";import"./index-BiwwAO30.js";import"./index-DFRqr6gV.js";import"./index-BanPx_DE.js";import"./index-srYpiRUO.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-D9jdXbdP.js";import"./index-CWuaVSgJ.js";import"./index-HWoLZMFR.js";import"./index-B-Q4wIzC.js";import"./index-qo-mggsg.js";import"./index-CAA4Qv86.js";import"./index-DrzY2cvO.js";import"./index-B1fAjmi8.js";import"./index-CBalpVvc.js";import"./index-BhKUEEoJ.js";import"./index-CprSx77w.js";import"./index-ySRw8COl.js";import"./index-C3D1rheI.js";import"./index-CC4d2-d6.js";import"./index-BkLOgpm1.js";import"./index-ORro-3F_.js";import"./index-Bn6r3qI-.js";import"./index-DCHl1NWI.js";import"./index-xYIn6EQB.js";import"./index-CZ9VNNID.js";import"./index-sokDMC8X.js";import"./index-DKSgdMEw.js";import"./index-1lDXSB5o.js";import"./index-BS716PzN.js";import"./index-BoULGum0.js";import"./index-QllAPaHn.js";import"./index-Cem2Ag1w.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CtT43hFd.js";import"./index-DhvmMPlp.js";import"./index-B4DCnhI4.js";import"./index-Wm7yXHG7.js";import"./index-DE9x5FJz.js";import"./index-BU822_AO.js";import"./index-BL3IVkrQ.js";import"./index-C9IwNMpc.js";import"./index-CabIIsyC.js";import"./index-DQOwJSOs.js";import"./index-C7pppfbp.js";import"./ComboBox-_Uzqzogs.js";import"./index-SEGUll7-.js";import"./constants-DzgFZdqM.js";import"./TreeList-BXBmTHhj.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationGroup",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Группа карточек уведомлений для истории в Drawer. В свёрнутом виде показывает только верхнюю карточку и намекает на остальные визуальным эффектом «колоды» — двумя срезами из-под неё. Круглая кнопка-тумблер снизу раскрывает всю стопку: карточки появляются каскадом с плавной slide-down анимацией, а при сворачивании уходят обратно такой же slide-up.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:320,description:"NotificationGroup со свойствами по умолчанию.",code:`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

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
