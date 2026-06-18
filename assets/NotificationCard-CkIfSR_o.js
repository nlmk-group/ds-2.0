import{r as c,j as t,m as l,S as x,U as u}from"./iframe-BdOpgzrS.js";import{useMDXComponents as g}from"./index-DJy09qRq.js";import{N as f}from"./index-D9BCvHbX.js";import{DecoratorDefault as b}from"./Decorator.stories-C28-sXLg.js";import{s as m,H as y,E as r}from"./Header-DXi6_hVE.js";import{F as h}from"./FigmaEmbed-Chyrs9ER.js";import{P as B,T as C}from"./Tests-Oc7S5ZKL.js";/* empty css               */import{T as e}from"./index-BSn6HQzr.js";import{a as N}from"./argsTypes-Czz-eC22.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7PkToN1.js";import"./index-CJQtOKfQ.js";import"./clsx-B-dksMZM.js";import"./index-BKLHPlSR.js";import"./16-DeFUxAIB.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./16-Cnsgcg9g.js";import"./index-CLAZw8N4.js";import"./16--IL1VHaj.js";import"./index-DVTrHQKM.js";import"./index-OONZivDn.js";import"./32-ChopWT_z.js";import"./32-ChxPjCDA.js";import"./24-BmvAwPvh.js";import"./24-CV0PNOey.js";import"./24-CRWfoU4Z.js";import"./24-DOFnqipN.js";import"./24-PBHXpKVH.js";import"./24-CBMXdyoG.js";import"./24-BVmNVZn4.js";import"./24-WjLrdny4.js";import"./24-K0yWzWKj.js";import"./24-BznlLpgc.js";import"./24-VDHIr0Dv.js";import"./16-CEnZ3psN.js";import"./16-C2Q8nrRG.js";import"./16-Du9yZ744.js";import"./index-vv3ZnJjs.js";import"./index-CRHD1rp7.js";import"./index-BYrUxwbP.js";import"./index-Ck-XN-ge.js";import"./index-Eg_8IEpf.js";import"./index-BCWgfUlh.js";import"./colorsMapping-C6bFIk14.js";import"./index-D7hqcCmB.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BO8DxY49.js";import"./useFloatingReferenceSync-DqthvRxQ.js";import"./index-CWizWQ-f.js";import"./index-CeyXG_zt.js";import"./types-TdnjS80C.js";import"./index-BGK3vMRu.js";import"./MenuItem-lW_S4VfZ.js";import"./floating-ui.react-B81N47Rb.js";import"./sizesMapping-D8QavrGc.js";import"./index-BXEDdhur.js";import"./index-Bo3DQfvQ.js";import"./index-BAERPvu_.js";import"./index-4jA536FU.js";import"./index-B-NoUIZI.js";import"./index-CL6fgpqk.js";import"./index-CoT1f0LI.js";import"./index-Bua5qXkb.js";import"./index-DDPpfVml.js";import"./index-B43IYv7N.js";import"./index-imlWOh4l.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CYye5MAA.js";import"./index-WpmEvsZB.js";import"./index-C1BAN_9s.js";import"./index-B6XbamL1.js";import"./index-BN5r_AV-.js";import"./index-C8MSIeIN.js";import"./index-B0j95XIR.js";import"./index-CeFYkyd7.js";import"./index-R9IHYOO5.js";import"./index-DPvTpWrG.js";import"./index-DkWAreVa.js";import"./index-1Qe_4yAi.js";import"./index-BH6jN-u0.js";import"./index-CUsaH7j6.js";import"./index-jvRyrw0B.js";import"./index-BRrp3xVQ.js";import"./index-ljDOKoqn.js";import"./index-DHYk6Txp.js";import"./index-k1EAulh0.js";import"./index-C2cVSUod.js";import"./index-D7Mf3A5i.js";import"./index-9Dq95OiO.js";import"./index-Cl4xrWxE.js";import"./index-CrczCUl4.js";import"./index-DcZWdIUK.js";import"./index-DLQT8wYk.js";import"./index-BI0qJ3c6.js";import"./index-B2RalwUT.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-BYJCkP-K.js";import"./index-D-LNKzPH.js";import"./index-C0Y8rlI2.js";import"./index-y60vd0es.js";import"./index-BSXV1Fg-.js";import"./index-G-edGsEt.js";import"./index-BYR3WDA_.js";import"./index-COjirL-c.js";import"./index-B_UPuCF1.js";import"./index-5UE0QfQE.js";import"./ComboBox-C09mBvpI.js";import"./index-Dse-RVNj.js";import"./constants-DdJvlSUO.js";import"./TreeList-CxWBdKx_.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationCard",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16720-15828",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Большая карточка уведомления для истории в Drawer или Dialog. Содержит заголовок, текст и время, красной точкой помечает непрочитанные. Длинный текст автоматически сворачивается до двух строк — кнопка «Показать больше / Свернуть» появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:260,description:"NotificationCard по умолчанию.",code:`import { Box, NotificationCard } from '@nlmk/ds-2.0';

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
