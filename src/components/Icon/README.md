# Иконки дизайн-системы

Этот документ описывает процесс добавления новых иконок в дизайн-систему и последующего использования скрипта для автоматической генерации экспортов и объекта icons для документации.

## Добавление новых иконок

Чтобы добавить новые иконки, выполните следующие шаги:

1. Создайте файлы иконок в соответствующей папке темы иконок (`System`, `Metallurgy`, `Special`, `Sidebar`, `Filters`, `SPEP`, `NLMKONE`, `MES`, `Custom`,). Каждый файл иконки должен быть именован в соответствии с размером иконки (например, `16.tsx`, `24.tsx`, `32.tsx`).
2. Разместите файлы иконок в подпапке, соответствующей названию иконки, внутри папки темы иконок (например, `Icon/IconsDirectory/Тема_Иконок/Название_Иконки_Без_Icon`).

## Использование скрипта для генерации экспортов

После того как вы добавили все необходимые иконки, запустите скрипт для автоматической генерации экспортов и объекта icons, который будет использоваться в Storybook.

Запустите скрипт командой:

```sh
yarn generateIconsExports
```

## Что делает скрипт?

Скрипт автоматически: Обновляет файлы index.ts в каждой подпапке с иконками, генерируя экспорты для каждого размера иконки. Создает главный файл index.ts в корне папки иконок, содержащий импорты и экспорты всех иконок из обрабатываемых папок. Генерирует объект icons с типом any, который содержит ссылки на все иконки, сгруппированные по размерам, для удобного доступа в приложении.

## Документация иконок в Figma

Для ознакомления с полной документацией иконок и их использованием, пожалуйста, посетите [документацию в Figma](https://www.figma.com/file/MgF9yvGQTZuj4qYPcWYTf7/DS2.0-Icons?node-id=2%3A10&mode=dev 'Документация в Figma').

После выполнения скрипта все добавленные вами иконки будут доступны для импорта и использования в вашем проекте.