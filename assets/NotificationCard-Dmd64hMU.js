import{r as c,j as t,m as l,S as x,U as u}from"./iframe-B07kYXZc.js";import{useMDXComponents as g}from"./index-CjGunqbw.js";import{N as f}from"./index-DjgiFHNl.js";import{DecoratorDefault as b}from"./Decorator.stories-B0DPksjy.js";import{s as m,H as y,E as r}from"./Header-BWIBo_NL.js";import{F as h}from"./FigmaEmbed-BR9XTrZ3.js";import{P as B,T as C}from"./Tests-Ddqg8ow3.js";/* empty css               */import{T as e}from"./index-Cp_gevaj.js";import{a as N}from"./argsTypes-Czz-eC22.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0sw3GI3b.js";import"./index-6XMOLgd-.js";import"./clsx-B-dksMZM.js";import"./index-CTuNz-uH.js";import"./16-TYDaleCn.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./16-DlJ0H2so.js";import"./index-IzK8PPRw.js";import"./16-pHftyEs8.js";import"./index-RqeUiUBw.js";import"./index-d9zAT72g.js";import"./32-BZSRNIXj.js";import"./32-QMp9o6yj.js";import"./24-Ccs2DJDL.js";import"./24-z3_ytzpX.js";import"./24-BwrZtwQH.js";import"./24-C1AoWM2r.js";import"./24-BvO12ahp.js";import"./24-B7RF46pu.js";import"./24-Bx4D2aXR.js";import"./24-BEhrtGbq.js";import"./24-BbpZ1avt.js";import"./24-DMSuIbyM.js";import"./24-k5ICTj37.js";import"./16-B0Y2v5mC.js";import"./16-7D2L3psa.js";import"./16-Cw3IW5wm.js";import"./index-BqdfdXLw.js";import"./index-DlVjw_Iw.js";import"./index-CwfAWzLk.js";import"./index-DOy_CavS.js";import"./index-BoP19oSV.js";import"./index-BejtXQk_.js";import"./colorsMapping-C6bFIk14.js";import"./index-X7iBD8Fn.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bwgk6Sxb.js";import"./useFloatingReferenceSync-DbQMH-3c.js";import"./index-Cy6t6Ezk.js";import"./index-COK94YB4.js";import"./types-TdnjS80C.js";import"./index-BBjCAhaL.js";import"./MenuItem-CIRsK8he.js";import"./floating-ui.react-CDNbLsbS.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNDfqOtX.js";import"./index-FEAihz4M.js";import"./index-B_xFOywu.js";import"./index-BQZWcYlM.js";import"./index-BTSmrueN.js";import"./index-DScTDMmh.js";import"./index-SJgOFp9t.js";import"./index-CSqN0A7u.js";import"./index-B2smvyda.js";import"./index-CFAtiP4c.js";import"./index-DbxPhvPc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CJa8o8cf.js";import"./index-8nOplKbR.js";import"./index-B0gG98-R.js";import"./index-DgGoLy7y.js";import"./index-J7Njc-PT.js";import"./index-Dklje7JM.js";import"./index-CJa1u0t1.js";import"./index-C6ef_7XJ.js";import"./index-CMWxTnoS.js";import"./index-BoUKONT_.js";import"./index-DJFZ0Zdl.js";import"./index-CHgcPGEu.js";import"./index-Byj_yMGc.js";import"./index-ClDlTn4P.js";import"./index-UkfqzCFW.js";import"./index-fequeZGH.js";import"./index-B1FDloAn.js";import"./index-B8GZkxEV.js";import"./index-DeLkfcTC.js";import"./index-DafsOy6K.js";import"./index-DKxgdZhf.js";import"./index-BHmgEshV.js";import"./index-D3bQP97z.js";import"./index-mBiA4WNY.js";import"./index-Yuhpfewd.js";import"./index-T2XevpS6.js";import"./index-vOYRqFvw.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CGrwobg7.js";import"./index-DBMo2nZZ.js";import"./index-BEy1wh23.js";import"./index-OtFZfMgj.js";import"./index-D2n5mAtP.js";import"./index-DdwT-0gn.js";import"./index-C3EtJTZW.js";import"./index-BO8JYT_u.js";import"./index-DXXEuEBS.js";import"./index-Ca-tiPXF.js";import"./index-DpajdaDu.js";import"./ComboBox-Dwq3rPDU.js";import"./index-DqxhwPYk.js";import"./constants-eZqyrgzW.js";import"./TreeList-g0RzoTR-.js";import"./copyToClipboard-DB_KM_BY.js";const a="NotificationCard",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16720-15828",j=()=>{const[o,i]=c.useState(0),p=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(y,{title:a,description:"Большая карточка уведомления для истории в Drawer или Dialog. Содержит заголовок, текст и время, красной точкой помечает непрочитанные. Длинный текст автоматически сворачивается до двух строк — кнопка «Показать больше / Свернуть» появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:p(0),onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:p(2),onClick:()=>i(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{minHeight:260,description:"NotificationCard по умолчанию.",code:`import { Box, NotificationCard } from '@nlmk/ds-2.0';

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
