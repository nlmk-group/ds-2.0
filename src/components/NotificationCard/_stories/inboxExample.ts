export const inboxExample = `import { useState } from 'react';
import { Box, Button, Drawer, IconCloseOutlined24, NotificationCard, Switch, Tabs, Typography } from '@nlmk/ds-2.0';

const sections = ['Задачи', 'Новости'];
const initialMessages = [
  { id: 1, section: 'Задачи', title: 'Согласуйте график отпусков', timestamp: 'Сегодня, 14:13', unread: true,
    body: 'Мария Смирнова отправила график на согласование. Проверьте даты отпусков сотрудников и замены на время их отсутствия. Передайте замечания руководителю до пятницы, чтобы отдел кадров успел утвердить график.' },
  { id: 2, section: 'Задачи', title: 'Заявка на пропуск согласована', timestamp: 'Вчера, 16:40', unread: false,
    body: 'Пропуск можно забрать на проходной с 08:00.' },
  { id: 3, section: 'Новости', title: 'Открыта запись на обучение', timestamp: 'Сегодня, 11:45', unread: true,
    body: 'В личном кабинете доступно расписание очных занятий на декабрь.' }
];

export default () => {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState(sections[0]);
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const inSection = messages.filter(message => message.section === section);
  const visible = inSection.filter(message => !unreadOnly || message.unread);
  const unreadCount = (name: string) => messages.filter(message => message.section === name && message.unread).length;
  const markRead = () => setMessages(current => current.map(message =>
    message.section === section ? { ...message, unread: false } : message
  ));

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>Открыть уведомления</Button>
      <Drawer isOpen={open} onClose={() => setOpen(false)} width="min(560px, 100vw)"
        aria-label="Уведомления" isViewCloseButton={false}>
        <Box flexDirection="column" gap={16} p={4}>
          <Box alignItems="center" justifyContent="space-between" gap={8}>
            <Typography variant="Heading3">Уведомления</Typography>
            <Button type="button" size="s" variant="secondary" color="ghost" aria-label="Закрыть уведомления"
              iconButton={<IconCloseOutlined24 />} onClick={() => setOpen(false)} />
          </Box>
          <Tabs>
            {sections.map(name => (
              <Tabs.Tab key={name} label={name} active={name === section} onClick={() => setSection(name)}
                hasBadge={unreadCount(name) > 0} badgeChildren={unreadCount(name)} />
            ))}
          </Tabs>
          <Switch label="Только непрочитанные" checked={unreadOnly} onChange={setUnreadOnly} />
          {visible.map(({ id, title, body, timestamp, unread }) => (
            <NotificationCard key={id} title={title} body={body} timestamp={timestamp} unread={unread} />
          ))}
          {visible.length === 0 && <Typography role="status">Все сообщения в этом разделе прочитаны.</Typography>}
          {unreadCount(section) > 0 && (
            <Box>
              <Button type="button" size="s" variant="secondary" onClick={markRead}>Прочитать все в разделе</Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};`;
