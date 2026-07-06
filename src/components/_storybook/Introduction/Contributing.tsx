import React from 'react';

import { CopyWrapper } from '@components/Colors/subcomponents/CopyWrapper';
import { Divider, Icon, Link, Typography } from '@components/index';

import styles from './Welcome.module.scss';

export const Contributing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contributing}>
        <div className={styles.description}>
          <Typography variant="Heading1" className={styles['description-header']}>
            Вклад в развитие дизайн-системы НЛМК
          </Typography>

          <Typography variant="Subheading3-Medium" className={styles['description-subheader']}>
            Мы приветствуем любые идеи и улучшения. Следуйте руководству для упрощения процесса.
          </Typography>
        </div>
        <Divider />
        <Typography variant="Heading2">🎯 Общие принципы</Typography>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Прозрачность и Открытость</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Вся информация о развитии дизайн-системы регулярно обновляется в{' '}
              <Link
                href="./?path=/docs/introduction-changelog--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Changelog
              </Link>
              . Мы поддерживаем открытые обсуждения и конструктивную критику.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Чёткие Цели</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Каждое предложенное изменение или улучшение должно иметь чёткую цель, отражать нужды пользователей или
              улучшать функциональность либо удобство разработки.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Последовательность</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Важно поддерживать единообразие в стиле кода, структуре и терминологии. Перед внесением изменений
              ознакомьтесь с существующими компонентами, чтобы сохранить целостность системы.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Обратная связь</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обратная связь крайне важна. Информируйте команду и сообщество о проблемах или идеях по улучшению.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Тестирование и Надёжность</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменения должны сопровождаться тестами для гарантии надёжности и предотвращения ошибок. Новые функции
              рекомендуется тестировать перед внедрением.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Документация</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновляйте документацию параллельно с кодом. Полная и актуальная документация помогает другим участникам
              и пользователям лучше понять и использовать систему.
            </li>
          </ul>
        </div>

        <Typography variant="Subheading3-Medium" className={styles['description-subheader']}>
          Мы надеемся, что данные принципы помогут вам эффективно вносить вклад в развитие нашей дизайн-системы. Спасибо
          за вашу помощь и творчество! 🖼️
        </Typography>

        <Divider />

        <Typography variant="Heading2">🔮 1. Клонирование репозитория</Typography>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            Для начала необходимо склонировать репозиторий и создать новую ветку для вашей работы. Это позволит вам
            вносить изменения, не влияя на основной код. Выполните следующие команды в терминале:
          </Typography>
          <ul className={styles.list}>
            <li>
              <CopyWrapper copy={'git clone https://github.com/nlmk-group/ds-2.0.git'} placement="bottom">
                <code className={styles.code}>
                  <div>git clone https://github.com/nlmk-group/ds-2.0.git</div>
                  <Icon containerSize={16} name="IconContentCopyOutlined24" color="inherit" />
                </code>
              </CopyWrapper>
            </li>
            <li>
              <CopyWrapper copy={'cd ds-2.0'} placement="bottom">
                <code className={styles.code}>
                  <div>cd ds-2.0</div>
                  <Icon containerSize={16} name="IconContentCopyOutlined24" color="inherit" />
                </code>
              </CopyWrapper>
            </li>
            <li>
              <CopyWrapper copy={'git checkout -b feature/название-вашей-ветки'} placement="bottom">
                <code className={styles.code}>
                  <div>git checkout -b feature/название-вашей-ветки</div>
                  <Icon containerSize={16} name="IconContentCopyOutlined24" color="inherit" />
                </code>
              </CopyWrapper>
            </li>
          </ul>
        </div>

        <Typography variant="Heading2">⚙️ 2. Настройка среды разработки</Typography>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            Перед началом работы убедитесь, что у вас установлены все нужные зависимости. Для этого выполните одну из
            следующих команд в зависимости от используемого вами пакетного менеджера:
          </Typography>
          <ul className={styles.list}>
            <li>
              <CopyWrapper copy={'npm install'} placement="bottom">
                <code className={styles.code}>
                  <div>npm install</div>
                  <Icon containerSize={16} name="IconContentCopyOutlined24" color="inherit" />
                </code>
              </CopyWrapper>
            </li>
            <li>или</li>
            <li>
              <CopyWrapper copy={'yarn'} placement="bottom">
                <code className={styles.code}>
                  <div>yarn</div>
                  <Icon containerSize={16} name="IconContentCopyOutlined24" color="inherit" />
                </code>
              </CopyWrapper>
            </li>
          </ul>
          <Typography variant="Subheading3-Medium">
            Обратите внимание на версию Node.js: она должна быть выше версии <b>18 LTS</b>.
          </Typography>
        </div>

        <Typography variant="Heading2">🧩 3. Создание и тестирование компонента</Typography>

        <div className={styles.history}>
          <ul className={styles.list}>
            <li>
              • Создайте компонент в соответствующей папке, следуя принятым стандартам именования и структуре файлов.
            </li>
            <li>• Добавьте стили и тесты для нового компонента.</li>
            <li>• Протестируйте компонент, убедитесь, что все работает правильно.</li>
          </ul>
        </div>

        <Typography variant="Heading2">📚 4. Документация</Typography>

        <div className={styles.history}>
          <ul className={styles.list}>
            <li>
              Документацию можно добавить в соответствующий файл или раздел, используя шаблоны, существующие для других
              компонентов.{' '}
              <Link
                href="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button"
                target="blank"
                className={styles['link-changelog']}
              >
                👀 Посмотрите пример
              </Link>
              .
            </li>
          </ul>
        </div>

        <Typography variant="Heading2">🔍 5. Проверка кода и форматирование</Typography>

        <div className={styles.history}>
          <ul className={styles.list}>
            <li>Примените линтеры и форматирование, чтобы ваш код соответствовал стандартам проекта.</li>
          </ul>
        </div>

        <Divider />

        <Typography variant="Heading2">🚀 Создание Pull Request</Typography>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Подготовка кода:</b>
          </Typography>
          <ul className={styles.list}>
            <li>• Убедитесь, что ваш код протестирован и завершен. Это поможет избежать проблем при проверке.</li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Создание Pull Request (PR):</b>
          </Typography>
          <ul className={styles.list}>
            <li>• Откройте PR из вашей ветки в основной репозиторий.</li>
            <li>
              • Используйте понятные заголовки и подробно опишите, какие изменения вы внесли. Укажите ссылки на
              связанные задачи или проблемы, если они есть.
            </li>
          </ul>
        </div>

        <Divider />

        <Typography variant="Heading2">🔍 Процесс ревью</Typography>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Проверка кода:</b>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Ваш PR будет просмотрен одним или несколькими членами команды. Они могут оставить комментарии или
              предложить изменения.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Внесение исправлений:</b>
          </Typography>
          <ul className={styles.list}>
            <li>• Примите во внимание отзывы и внесите необходимые правки.</li>
            <li>
              • Чтобы изменить код, просто сделайте новый коммит в вашей ветке. Эти изменения автоматически отобразятся
              в PR.
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            <b>Завершение:</b>
          </Typography>
          <ul className={styles.list}>
            <li>• После одобрения вашего PR он будет слит в основную ветку.</li>
          </ul>
        </div>

        <Typography variant="Subheading3-Medium" className={styles['description-subheader']}>
          ✨ Спасибо вам за ваш вклад в развитие первой производственной дизайн-системы НЛМК!
        </Typography>
      </div>
    </div>
  );
};
