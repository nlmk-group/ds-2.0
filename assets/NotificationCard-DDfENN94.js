import{r as c,j as t,m as l,S as x,U as u}from"./iframe-D_geb98U.js";import{useMDXComponents as g}from"./index-DEBIPiNl.js";import{N as f}from"./index-DUNXWP3K.js";import{DecoratorDefault as b}from"./Decorator.stories-CtbByLLQ.js";import{s as m,H as y,E as r}from"./Header-Cp8G-9CM.js";import{F as h}from"./FigmaEmbed-CpTK-aEq.js";import{P as B,T as C}from"./Tests-BFrILV54.js";/* empty css               */import{T as e}from"./index-Cbxger2I.js";import{a as N}from"./argsTypes-Czz-eC22.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzpyBbEs.js";import"./index-DVKWK4-j.js";import"./clsx-B-dksMZM.js";import"./index-CV6hzqCP.js";import"./16-CAqgkR1g.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./16-B1x2jzVj.js";import"./index-BOQlEYEy.js";import"./16-ytttYgy7.js";import"./index-CRYZ0TC_.js";import"./index-DXqbsWBL.js";import"./32-CJsTn9GR.js";import"./32-CSeewk7k.js";import"./24-Dks7beat.js";import"./24-wTI-a7Qj.js";import"./24-B20dUB8u.js";import"./24-ckbWkRdy.js";import"./24-Cpo6jKx5.js";import"./24-8OlOIiot.js";import"./24-D4VquirR.js";import"./24-Dh3bHrWZ.js";import"./24-l18nGkor.js";import"./24-CvT8JzoY.js";import"./24-Bgy5v27I.js";import"./16-CQHHA9le.js";import"./16-ZmyXGQ60.js";import"./16-Dy6XUum1.js";import"./index-gGDdMD4Z.js";import"./index-Dc0Smdiq.js";import"./index-DY6Wauvi.js";import"./index-DskztHOz.js";import"./index-DziAzwH5.js";import"./index-CdX0h1x8.js";import"./colorsMapping-C6bFIk14.js";import"./index-C9yrXfLO.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DtINpL4z.js";import"./useFloatingReferenceSync-Uu7LJ-ip.js";import"./index-hZv1vyiY.js";import"./index-Ds2s981t.js";import"./types-TdnjS80C.js";import"./index-CHLxKCE-.js";import"./MenuItem-RKU4owtw.js";import"./floating-ui.react-C_U8tQaz.js";import"./sizesMapping-D8QavrGc.js";import"./index-CVwy7aMy.js";import"./index-B82E4k1I.js";import"./index-DurTHLjl.js";import"./index-BmAyGkEC.js";import"./index-B207YH3y.js";import"./index-D2pVVHYb.js";import"./index-D-VB7JJf.js";import"./index-CNpEsrMB.js";import"./index-CS6EpHju.js";import"./index-B4KF8t6p.js";import"./index-Col1tz7G.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CTGxoHFE.js";import"./index-CmX5uS9r.js";import"./index-8pjDucJj.js";import"./index-XAV3gP1c.js";import"./index-CqItqX1T.js";import"./index-B4Lvy_xN.js";import"./index-BsU4-z2O.js";import"./index-DGVoojgO.js";import"./index-BJ_EJkVt.js";import"./index-DWfoHQZi.js";import"./index-BEr6Yej_.js";import"./index-DsiBS6O_.js";import"./index-BRmfAQM5.js";import"./index-7M5-vNro.js";import"./index-BBQxN6Hh.js";import"./index-WEJ-wiwM.js";import"./index-B0vyHZT0.js";import"./index-DOrebIlF.js";import"./index-CRQ1F-kQ.js";import"./index-IhMb7mOd.js";import"./index-Dk_eh4hq.js";import"./index-BHIlvHWF.js";import"./index-CmZWJowM.js";import"./index-CUlZZogs.js";import"./index-CdZRxSQR.js";import"./index-BCQKokda.js";import"./index-Cml4jBdN.js";import"./index-DEt2dyhg.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CsAs8tg2.js";import"./index-Tlp5L_x6.js";import"./index-Bg9A9_j3.js";import"./index-BRE8g-Px.js";import"./index-vrktoCUN.js";import"./index-DwD6M5XP.js";import"./index-Cd99GZ_P.js";import"./index-B34m8eE0.js";import"./index-D0nJVAiy.js";import"./index-B5MzhOMl.js";import"./ComboBox-ru-vv14S.js";import"./index-NvAUagqQ.js";import"./constants-DBot8vvE.js";import"./TreeList-DmNOIBRU.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationCard",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16720-15828",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Большая карточка уведомления для истории в Drawer или Dialog. Содержит заголовок, текст и время, красной точкой помечает непрочитанные. Длинный текст автоматически сворачивается до двух строк — кнопка «Показать больше / Свернуть» появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:260,description:"NotificationCard по умолчанию.",code:`import { Box, NotificationCard } from '@nlmk/ds-2.0';

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
