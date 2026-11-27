import { expect, Page, test } from '@playwright/test';

async function story(page: Page, id: string, args?: string) {
  const params = new URLSearchParams({ id, viewMode: 'story' });
  if (args) params.set('args', args);
  await page.goto('/iframe.html?' + params);
  await expect(page.locator('#storybook-root > *').first()).toBeAttached();
}

test('Switch принимает фокус по Tab и меняет состояние по пробелу', async ({ page }) => {
  await story(page, 'components-switch-stories--default-switch');
  const toggle = page.getByRole('switch').first();
  await page.keyboard.press('Tab');
  await expect(toggle).toBeFocused();
  const initial = await toggle.isChecked();
  await page.keyboard.press('Space');
  await expect(toggle).toBeChecked({ checked: !initial });
});

test('Radio переключается стрелками внутри группы', async ({ page }) => {
  await story(page, 'components-radio-stories--radio-default');
  await page.getByRole('radio', { name: 'Липецк' }).check();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('radio', { name: 'Москва' })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Липецк' })).not.toBeChecked();
});

test('Tabs поддерживает стрелки и переходы Home и End', async ({ page }) => {
  await story(page, 'components-tabs-stories--tabs-default');
  const tabs = page.getByRole('tablist').getByRole('tab');
  await tabs.first().focus();
  await page.keyboard.press('ArrowRight');
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('End');
  await expect(tabs.last()).toBeFocused();
  await page.keyboard.press('Home');
  await expect(tabs.first()).toBeFocused();
});

test('Сводка ошибок переводит фокус на соответствующее обязательное поле', async ({ page }) => {
  await story(page, 'components-input-stories--form-validation');
  const submit = page.getByRole('button', { name: 'Отправить заявку' });
  await submit.click();
  await expect(page.getByRole('group', { name: 'Исправьте поля' })).toBeFocused();
  const material = page.getByRole('textbox', { name: 'Материал' });
  const address = page.getByRole('textbox', { name: 'Адрес поставки' });
  await page.getByRole('link', { name: 'Укажите материал' }).click();
  await expect(material).toBeFocused();
  await expect(material).toHaveAccessibleDescription('Укажите материал');
  await expect(material).toHaveJSProperty('required', true);
  await expect(address).toHaveJSProperty('required', true);
  await material.fill('Сталь');
  await address.fill('Липецк');
  await submit.click();
  await expect(page.getByRole('status')).toHaveText('Заявка отправлена');
});

test('Escape закрывает одно окно и возвращает фокус на кнопку открытия', async ({ page }) => {
  await page.goto('/iframe.html?id=introduction-z-index--docs&viewMode=docs');
  const trigger = page.getByRole('button', { name: 'Каталог продукции', exact: true });
  await page
    .getByText(/^Модалка поверх модалки\./)
    .first()
    .scrollIntoViewIfNeeded();
  await trigger.click();
  const dialogs = page.getByRole('dialog', { includeHidden: true });
  const material = page.getByRole('button', { name: /Сталь 09Г2С/ });
  await material.click();
  await expect(dialogs).toHaveCount(2);
  await page.keyboard.press('Escape');
  await expect(dialogs).toHaveCount(1);
  await expect(material).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialogs).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test('Drawer закрывается по Escape и возвращает фокус', async ({ page }) => {
  await story(page, 'components-drawer-stories--drawer-default');
  const trigger = page.getByRole('button', { name: 'Открыть Drawer', exact: true });
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test('Выбор и перенос файлов соблюдают ограничения, загрузку можно отменить', async ({ page }) => {
  await story(page, 'components-draganddrop-stories--dnd-default', 'multiple:false');
  const input = page.locator('input[type=file]');
  const drop = async (names: string[]) =>
    input.evaluate((el, files) => {
      const dataTransfer = new DataTransfer();
      for (const name of files) dataTransfer.items.add(new File(['x'], name, { type: 'image/png' }));
      el.dispatchEvent(new DragEvent('drop', { bubbles: true, dataTransfer }));
    }, names);
  await drop(['a.png', 'b.png']);
  await expect(page.getByRole('alert')).toHaveText('Выберите один файл.');
  await input.setInputFiles({ name: 'list.txt', mimeType: 'text/plain', buffer: Buffer.from('x') });
  await expect(page.getByRole('alert')).toContainText('list.txt');
  await drop(['photo.png']);
  await expect(input).toBeDisabled();
  await page.getByRole('button', { name: 'Отменить загрузку' }).click();
  await expect(input).toBeEnabled();
});

test('Реестр сохраняет фильтр после повтора и назначает выбранные поставки', async ({ page }) => {
  await story(page, 'table-stories--supply-registry', 'initialState:error');
  const search = page.getByRole('textbox', { name: 'Поиск по материалу' });
  await search.fill('сталь');
  await page.getByRole('button', { name: 'Повторить' }).click();
  await expect(page.getByRole('table')).toBeVisible();
  await expect(search).toHaveValue('сталь');
  const choices = page.getByRole('checkbox');
  await expect(choices).toHaveCount(2);
  await choices.first().check();
  await choices.last().check();
  await page.getByRole('button', { name: 'Назначить отдел снабжения (2)' }).click();
  await expect(page.getByRole('cell', { name: 'Отдел снабжения', exact: true })).toHaveCount(2);
  await expect(choices.first()).not.toBeChecked();
  await search.fill('нет такого материала');
  await page.getByRole('button', { name: 'Сбросить поиск' }).click();
  await expect(choices).toHaveCount(3);
});

test('Пустой реестр позволяет создать первую поставку', async ({ page }) => {
  await story(page, 'table-stories--supply-registry', 'initialState:empty');
  await page.getByRole('button', { name: 'Создать первую поставку' }).click();
  await expect(page.getByRole('cell', { name: 'Сталь листовая', exact: true })).toBeVisible();
});

test('Modal поверх Drawer получает первый Escape', async ({ page }) => {
  await page.goto('/iframe.html?id=introduction-z-index--docs&viewMode=docs');
  await page
    .getByText(/^Modal поверх Drawer\./)
    .first()
    .scrollIntoViewIfNeeded();
  const journal = page.getByRole('button', { name: 'Журнал задач', exact: true });
  await journal.click();
  const task = page.getByRole('button', { name: /Проверка прокатного стана/ });
  await task.click();
  await expect(page.locator('[data-ui-modal]')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('[data-ui-modal]')).toHaveCount(0);
  await expect(task).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('[data-ui-drawer]')).toHaveCount(0);
  await expect(journal).toBeFocused();
});

test('Фильтр столбца выбирает несколько значений через чекбоксы', async ({ page }) => {
  await story(page, 'table-stories--filterable-multiselect-table');
  const name = page.getByRole('textbox', { name: 'Фильтр: Название' });
  await name.click();
  const options = page.locator('[data-ui-list-item]').filter({ has: page.getByRole('checkbox') });
  const first = options.first();
  const second = options.nth(1);
  const values = [(await first.innerText()).trim(), (await second.innerText()).trim()];
  await first.click();
  await second.click();
  await expect(first.getByRole('checkbox')).toBeChecked();
  await expect(second.getByRole('checkbox')).toBeChecked();
  await expect
    .poll(async () => {
      const names = await page.locator('#storybook-root tbody tr td:nth-child(2)').allInnerTexts();
      return [...new Set(names)].sort();
    })
    .toEqual(values.sort());
});

test('Заголовки таблицы с пагинацией выровнены с данными', async ({ page }) => {
  await story(page, 'table-stories--common-table-with-pagination-and-sorting-usage');
  const cells = page.locator('#storybook-root tbody tr').first().getByRole('cell');
  await expect(cells).toHaveCount(4);
  for (const [index, edge] of ['left', 'left', 'right', 'left'].entries()) {
    const positions = await Promise.all(
      [page.getByRole('columnheader').nth(index), cells.nth(index)].map(locator =>
        locator.evaluate((cell, side) => {
          const range = document.createRange();
          range.selectNodeContents(cell.querySelector('span')!);
          const rect = range.getBoundingClientRect();
          return side === 'left' ? rect.left : rect.right;
        }, edge)
      )
    );
    expect(Math.abs(positions[0] - positions[1])).toBeLessThanOrEqual(4);
  }
});

test('Версия пакета закреплена внизу боковой панели', async ({ page }, info) => {
  test.skip(info.project.name === 'mobile-width', 'На телефоне боковая панель изначально свёрнута');
  await page.goto('/?path=/story/components-radio-stories--radio-default');
  const sidebar = page.locator('#storybook-sidebar-region');
  const label = sidebar.locator(':scope > .ds-package-label');
  await expect(label).toHaveText(/^@nlmk\/ds-2\.0 — v\d+\.\d+\.\d+$/);
  const panel = (await sidebar.boundingBox())!;
  const badge = (await label.boundingBox())!;
  expect(Math.abs(panel.y + panel.height - badge.y - badge.height)).toBeLessThan(16);
  expect(badge.height).toBeLessThan(30);
});

test('Обводка маркера заполнения совпадает с поверхностью таблицы', async ({ page }) => {
  await story(page, 'table-stories--fill-cell-table');
  const cell = page.locator('[data-fill-row="0"][data-fill-col="0"]');
  await cell.click();
  const handle = cell.locator('span').last();
  await expect(handle).toHaveCSS('cursor', 'crosshair');
  expect(
    await handle.evaluate(el => {
      const probe = document.createElement('span');
      probe.style.color = 'var(--steel-10)';
      el.appendChild(probe);
      const matches = getComputedStyle(el).borderTopColor === getComputedStyle(probe).color;
      probe.remove();
      return matches;
    })
  ).toBe(true);
});

test('Справка DragAndDrop показывает значения по умолчанию и помещается в окно', async ({ page }) => {
  await page.goto('/iframe.html?id=components-draganddrop-info--docs&viewMode=docs');
  await page.getByRole('button', { name: 'Свойства компонента' }).click();
  const dialog = page.getByRole('dialog');
  for (const [name, value] of Object.entries({
    title: 'Перетащите файл',
    fileType: 'image',
    statusColor: 'default',
    size: 'l'
  })) {
    const row = dialog.getByRole('row').filter({ has: page.getByRole('rowheader', { name, exact: true }) });
    await expect(row.getByRole('cell').last().locator('code')).toHaveText(value);
  }
  await expect(dialog.getByText(/Упс, ошибка!/)).toBeAttached();
  const bounds = await dialog.getByRole('table').first().boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(page.viewportSize()!.width + 1);
});

test('Каталог Icon позволяет найти точный размер и скопировать JSX', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/iframe.html?id=components-icon-info--docs&viewMode=docs');
  const catalog = page.getByRole('region', { name: 'Каталог иконок' });
  const search = catalog.getByRole('textbox', { name: 'Поиск иконок' });
  await search.fill('IconSearchOutlined24');
  const detail = catalog.getByRole('complementary', { name: 'Выбранная иконка' });
  await expect(detail.locator('code').filter({ hasText: /^IconSearchOutlined24$/ })).toBeVisible();
  await expect(detail.locator('pre .token.keyword').first()).toBeVisible();
  await expect(detail.locator('[data-ui-toggle-button-group]')).toBeVisible();
  const copy = detail.getByRole('button', { name: /Копировать код|Код скопирован/ });
  const copyFrame = () => copy.evaluate(button => {
    const { width, height } = button.getBoundingClientRect();
    const { borderTopWidth, borderColor, borderStyle } = getComputedStyle(button, '::after');
    return { width, height, borderTopWidth, borderColor, borderStyle };
  });
  const original = await copyFrame();
  expect(original).toMatchObject({ borderTopWidth: '2px', borderStyle: 'solid' });
  await copy.click();
  await expect(copy).toHaveAccessibleName('Код скопирован');
  expect(await copyFrame()).toEqual(original);
  await page.mouse.move(0, 0);
  expect(await copyFrame()).toEqual(original);
  await expect(copy).toHaveAccessibleName('Копировать код');
  expect(await copyFrame()).toEqual(original);
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain('<IconSearchOutlined24');
  await search.fill('IconSearchOutlined');
  await catalog.getByRole('button', { name: 'Search Outlined', exact: true }).click();
  await detail.getByRole('button', { name: '32 px' }).click();
  await expect(detail.getByRole('button', { name: '32 px' })).toHaveAttribute('aria-pressed', 'true');
  await expect(detail.locator('pre')).toContainText('IconSearchOutlined32');
  const colorButton = detail.getByRole('button', { name: 'Выбрать цвет иконки' });
  await colorButton.scrollIntoViewIfNeeded();
  const colorInput = detail.locator('input[type=color]');
  const anchor = await colorButton.boundingBox();
  const picker = await colorInput.boundingBox();
  expect(Math.abs(anchor!.x - picker!.x) + Math.abs(anchor!.y - picker!.y)).toBeLessThan(2);
  await colorInput.fill('#a23b42');
  await expect(detail.locator('pre')).toContainText('#a23b42');
  await search.fill('no-such-icon');
  await expect(catalog.getByText('Подходящих иконок нет.')).toBeVisible();
  await catalog.getByRole('button', { name: 'Сбросить фильтры' }).click();
  await catalog.getByLabel('Размер', { exact: true }).click();
  await page.getByText('44 px', { exact: true }).first().click();
  await expect(detail.locator('code').filter({ hasText: /^IconFormula44$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Свойства компонента' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByText('TIconName', { exact: true })).toBeVisible();
  await expect(dialog.getByRole('link', { name: 'Открыть каталог' })).toHaveAttribute('href', /all-icons/);
  await expect(dialog.locator('code')).not.toHaveCount(0);
  expect(await dialog.locator('code').count()).toBeLessThan(100);
});

test('Welcome центрирует содержимое и сохраняет поля на узком экране', async ({ page }) => {
  await page.goto('/iframe.html?id=introduction-welcome--docs&viewMode=docs');
  const title = page.getByText('Дизайн-система НЛМК', { exact: true });
  const license = page.getByText(/Лицензия:/);
  await expect(title).toBeVisible();
  await expect(license).toBeAttached();
  await page.evaluate(() => document.fonts.ready);
  const bounds = await title.evaluate(node => {
    const block = node.closest('.sb-unstyled')!.firstElementChild!.getBoundingClientRect();
    return { top: block.top, bottom: innerHeight - block.bottom, left: block.left, right: innerWidth - block.right };
  });
  for (const name of ['NPM', 'GitHub', 'ДС', 'UI-Kit']) {
    const link = page.getByRole('link', { name, exact: true });
    const foreground = await link.locator('svg').evaluate(svg => getComputedStyle(svg.parentElement!).color);
    await expect(link.locator('svg path').first()).toHaveCSS('fill', foreground);
    await link.hover();
    await expect(link.locator('svg path').first()).toHaveCSS('fill', foreground);
  }
  if (page.viewportSize()!.width > 800) {
    const history = await page.getByRole('link', { name: 'История изменений' }).boundingBox();
    const guide = await page.getByRole('link', { name: 'Руководство' }).boundingBox();
    expect(history!.y).toBeCloseTo(guide!.y, 0);
  }
  expect(Math.abs(bounds.left - bounds.right)).toBeLessThan(4);
  if (bounds.bottom > 0) expect(Math.abs(bounds.top - bounds.bottom)).toBeLessThan(4);
  expect(bounds.top).toBeGreaterThanOrEqual(16);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    page.viewportSize()!.width
  );
});

test('Theme переключает оформление, сохраняет выбор и возвращает системную тему', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/iframe.html?id=introduction-theme--docs&viewMode=docs');
  const example = page.frameLocator('iframe[src*="introduction-theme--settings"]');
  const toggle = example.getByRole('switch', { name: 'Тёмная тема' });
  const reset = example.getByRole('button', { name: 'Вернуть системную тему' });
  const panel = example.getByText('Тема рабочего места').locator('..');
  await expect(reset).toBeDisabled();
  const lightBackground = await panel.evaluate(element => getComputedStyle(element).backgroundColor);
  await toggle.press('Space');
  await expect(toggle).toBeChecked();
  await expect(panel).not.toHaveCSS('background-color', lightBackground);
  await page.reload();
  await expect(toggle).toBeChecked();
  await reset.click();
  await expect(reset).toBeDisabled();
  await expect(panel).toHaveCSS('background-color', lightBackground);
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(toggle).toBeChecked();
});

test('Предпросмотр Header использует ширину примера при изменении размера окна', async ({ page }) => {
  await page.goto('/iframe.html?id=components-header-info--docs&viewMode=docs');
  const firstPreview = page.locator('.preview-container').first();
  await page.getByText('Базовый заголовок страницы.', { exact: true }).scrollIntoViewIfNeeded();
  await page.setViewportSize({ width: 1200, height: 800 });
  await expect(firstPreview).toBeVisible();
  const bounds = () => firstPreview.evaluate(element => {
    const preview = element.getBoundingClientRect();
    const code = element.previousElementSibling!.getBoundingClientRect();
    return { beside: Math.abs(preview.left - code.right) < 2, above: Math.abs(preview.bottom - code.top) < 2,
      fits: element.scrollWidth <= element.clientWidth };
  });
  await expect.poll(bounds).toMatchObject({ beside: true, fits: true });
  await page.setViewportSize({ width: 390, height: 800 });
  await expect.poll(bounds).toMatchObject({ above: true, fits: true });
});

test('Длинная опция MultiSelect помещается в строку при наведении на соседнюю', async ({ page }) => {
  await page.goto('/iframe.html?id=components-multiselect-info--docs&viewMode=docs');
  const field = page.getByRole('textbox', { name: 'Мультивыбор', exact: true }).first();
  await field.click();
  const options = page.locator('[data-ui-option-item]:visible');
  const steel = options.filter({ hasText: 'Высокопрочная низколегированная сталь' });
  const aluminum = options.filter({ hasText: 'Алюминий' });
  await aluminum.hover();
  const label = steel.getByText('Высокопрочная низколегированная сталь', { exact: true });
  const [line, content, next] = await Promise.all([steel.boundingBox(), label.boundingBox(), aluminum.boundingBox()]);
  expect(content!.y).toBeGreaterThanOrEqual(line!.y);
  expect(content!.y + content!.height).toBeLessThanOrEqual(next!.y);
  await expect(aluminum).toHaveAttribute('title', '');
  await field.press('ArrowDown');
  await field.press('Enter');
  await expect(steel.getByRole('checkbox')).toBeChecked();
  await expect(aluminum.getByRole('checkbox')).not.toBeChecked();
});

test('Grid меняет число колонок на брейкпоинте и по выбору пользователя', async ({ page }) => {
  await page.goto('/iframe.html?id=components-grid-info--docs&viewMode=docs');
  const preview = page.locator('.preview-container');
  const plan = preview.getByText('План смены', { exact: true });
  const output = preview.getByText('Выпущено', { exact: true });
  await page.setViewportSize({ width: 1000, height: 800 });
  await expect(plan).toBeVisible();
  expect((await plan.boundingBox())!.y).toBe((await output.boundingBox())!.y);
  await page.setViewportSize({ width: 390, height: 800 });
  expect((await output.boundingBox())!.y).toBeGreaterThan((await plan.boundingBox())!.y);
  await page.getByText(/^Перенос ячеек\./).scrollIntoViewIfNeeded();
  const group = page.getByRole('group', { name: 'Колонок в строке' });
  await group.getByRole('button', { name: '1', exact: true }).click();
  const cut = preview.getByText('Резка', { exact: true });
  const roll = preview.getByText('Прокатка', { exact: true });
  expect((await roll.boundingBox())!.y).toBeGreaterThan((await cut.boundingBox())!.y);
  await group.getByRole('button', { name: '3', exact: true }).click();
  expect((await roll.boundingBox())!.y).toBe((await cut.boundingBox())!.y);
});

test('PDF занимает ширину примера при выборе и удалении файла', async ({ page }) => {
  await page.goto('/iframe.html?id=components-pdfpreview-info--docs&viewMode=docs');
  await page.getByText('Интерактивный пример загрузки и предпросмотра PDF-файла.', { exact: true }).scrollIntoViewIfNeeded();
  const preview = page.locator('.preview-container').filter({ has: page.locator('input[type=file]') });
  const embed = preview.locator('embed[type="application/pdf"]');
  await expect(embed).toBeAttached();
  expect((await embed.boundingBox())!.width).toBeGreaterThan((await preview.boundingBox())!.width - 44);
  await preview.getByTestId('REMOVED_CONTROL').getByRole('button').click();
  await expect(embed).toHaveCount(0);
  await preview.locator('input[type=file]').setInputFiles('public/docs/pdf-test.pdf');
  await expect(embed).toBeAttached();
});

test('Splitter сохраняет место для ручки при изменении размеров панелей', async ({ page }) => {
  await page.goto('/iframe.html?id=components-splitter-info--docs&viewMode=docs');
  for (const vertical of [false, true]) {
    await page.getByText(vertical ? /^Вертикальная ориентация разделителя/ : /^Базовое использование Splitter/).scrollIntoViewIfNeeded();
    const handle = page.locator('[data-ui-splitter-handle]').nth(Number(vertical));
    await handle.scrollIntoViewIfNeeded();
    const top = handle.locator('../..').locator('[data-ui-splitter-top-pane]');
    const bottom = handle.locator('../..').locator('[data-ui-splitter-bottom-pane]');
    const rect = (await handle.boundingBox())!;
    const axis = vertical ? 'width' : 'height';
    const start = vertical ? 'x' : 'y';
    const before = (await top.boundingBox())!;
    expect(rect[start]).toBeGreaterThanOrEqual(before[start] + before[axis] - 1);
    expect(rect[start] + rect[axis]).toBeLessThanOrEqual((await bottom.boundingBox())![start] + 1);
    await page.mouse.move(rect.x + rect.width / 2, rect.y + rect.height / 2);
    await page.mouse.down();
    await page.mouse.move(rect.x + rect.width / 2 + (vertical ? 24 : 0), rect.y + rect.height / 2 + (vertical ? 0 : 24));
    await page.mouse.up();
    await expect.poll(async () => (await top.boundingBox())![axis]).toBeGreaterThan(before[axis] + 10);
  }
});

test('Button показывает и копирует самостоятельный JSX', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/iframe.html?id=components-button-stories--docs&viewMode=docs');
  await page.getByRole('switch', { name: 'Show code' }).first().click();
  const snippet = page.locator('pre').filter({ hasText: "from '@nlmk/ds-2.0'" }).first();
  await expect(snippet).toContainText('Сохранить');
  await expect(snippet).not.toContainText('args');
  await expect(snippet).not.toContainText('styles.wrapper');
  await page.getByRole('combobox', { name: 'startIcon', exact: true }).selectOption({ label: 'IconArticleOutlined24' });
  await expect(snippet).toContainText('IconArticleOutlined24');
  await page.getByRole('button', { name: 'Copy code' }).first().click();
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain('<Button');
});

test('Команды подключения показывают галочку рядом со скопированной командой', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/iframe.html?id=introduction-welcome--docs&viewMode=docs');
  await expect(page.locator('[data-ui-card]')).toHaveCount(3);
  await expect(page.locator('a button')).toHaveCount(0);
  for (const theme of ['dark-theme', 'light-theme']) {
    await page.evaluate(value => { document.documentElement.dataset.theme = value; }, theme);
    for (const command of ['npm install @nlmk/ds-2.0', 'yarn add @nlmk/ds-2.0']) {
      const button = page.getByRole('button', { name: 'Копировать команду: ' + command, exact: true });
      const copied = page.getByRole('button', { name: 'Скопировано: ' + command, exact: true });
      const copyPath = await button.locator('svg path').first().getAttribute('d');
      const size = await button.locator('svg').boundingBox();
      await button.hover();
      await expect(page.getByText('Копировать команду', { exact: true })).toBeVisible();
      await button.click();
      await expect(copied.locator('svg')).toBeVisible();
      await expect(copied.locator('svg path').first()).not.toHaveAttribute('d', copyPath!);
      expect(await copied.locator('svg').boundingBox()).toMatchObject({ width: size!.width, height: size!.height });
      await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(command);
      await expect(button).toBeVisible();
    }
  }
});

test('Центр уведомлений фильтрует сообщения и обновляет счётчики разделов', async ({ page }) => {
  await page.goto('/iframe.html?id=components-notificationcard-info--docs&viewMode=docs');
  await page.getByText(/^Центр уведомлений\. Откройте панель/).scrollIntoViewIfNeeded();
  const open = page.getByRole('button', { name: 'Открыть уведомления' });
  await open.click();
  const dialog = page.getByRole('dialog', { name: 'Уведомления' });
  const cards = dialog.locator('[data-ui-notification-card]');
  await expect(cards).toHaveCount(2);
  await dialog.getByText('Только непрочитанные', { exact: true }).click();
  await expect(cards).toHaveCount(1);
  await dialog.getByRole('button', { name: 'Показать больше' }).click();
  await expect(dialog.getByRole('button', { name: 'Свернуть' })).toBeVisible();
  await dialog.getByRole('button', { name: 'Прочитать все в разделе' }).click();
  await expect(dialog.getByRole('status')).toHaveText('Все сообщения в этом разделе прочитаны.');
  await expect(dialog.getByRole('tab', { name: /^Задачи/ })).toHaveText('Задачи');
  await dialog.getByRole('tab', { name: /^Новости/ }).click();
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText('Открыта запись на обучение');
  await expect(dialog.getByRole('button', { name: 'Закрыть уведомления' })).toBeInViewport();
  expect(await dialog.evaluate(e => e.scrollWidth - e.clientWidth)).toBeLessThanOrEqual(1);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await open.click();
  await dialog.getByRole('tab', { name: /^Задачи/ }).click();
  await dialog.getByText('Только непрочитанные', { exact: true }).click();
  await expect(cards).toHaveCount(2);
  await dialog.getByRole('button', { name: 'Закрыть уведомления' }).click();
  await expect(dialog).toBeHidden();
});

test('Компактный индикатор занимает 16 px и сохраняет размеры кнопки', async ({ page }) => {
  await page.goto('/iframe.html?id=components-spinner-info--docs&viewMode=docs');
  const ring = '[data-ui-spinner-loader]';
  await expect(page.locator('.preview-container').first().locator(ring)).toHaveCSS('width', '16px');
  await page.getByText(/^Компактная кнопка с индикатором/).scrollIntoViewIfNeeded();
  const save = page.getByRole('button', { name: 'Сохранить', exact: true });
  const before = await save.boundingBox();
  await save.click();
  await expect(save).toBeDisabled();
  await expect(save).toHaveAttribute('aria-busy', 'true');
  await expect(save.locator(ring)).toHaveCSS('height', '16px');
  await expect(save.locator('[data-ui-spinner-overlay] circle')).toHaveCSS('stroke', 'rgba(0, 0, 0, 0)');
  expect(await save.boundingBox()).toMatchObject({ width: before!.width, height: before!.height });
  await expect(save).toBeEnabled();
  await expect(save.locator(ring)).toHaveCount(0);
});

test('Вертикальные примеры Splitter помещаются в окно и сохраняют прокрутку внутри таблицы', async ({ page }) => {
  for (const story of ['splitter-vertical', 'vertical-splitter-with-sizes']) {
    await page.goto('/iframe.html?id=components-splitter-stories--' + story + '&viewMode=story');
    const top = page.locator('[data-ui-splitter-top-pane]');
    const right = page.locator('[data-ui-splitter-bottom-pane]');
    await expect(right).toContainText(story === 'splitter-vertical' ? 'Исполнитель' : 'Номер сертификата');
    const handle = page.locator('[data-ui-splitter-handle]');
    await handle.scrollIntoViewIfNeeded();
    for (const distance of [0, 25]) {
      const bounds = (await handle.boundingBox())!;
      if (distance) {
        await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
        await page.mouse.down();
        await page.mouse.move(bounds.x + bounds.width / 2 + distance, bounds.y + bounds.height / 2);
        await page.mouse.up();
      }
      for (const pane of [top, right]) {
        expect(await pane.evaluate(e => e.scrollWidth - e.clientWidth)).toBeLessThanOrEqual(1);
      }
      if (story === 'splitter-vertical') {
        expect(await right.evaluate(e => e.scrollHeight - e.clientHeight)).toBeLessThanOrEqual(1);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    }
  }
});

test('Ползунок Splitter раскрывает две версии неподвижного логотипа', async ({ page }) => {
  await story(page, 'components-splitter-stories--splitter-images');
  const comparison = page.getByRole('group', { name: /Сравнение логотипа/ });
  const logos = comparison.locator('svg');
  const divider = comparison.locator('[data-ui-splitter-divider]');
  const handle = comparison.locator('[data-ui-splitter-handle]');
  await handle.click({ trial: true });
  const bounds = (await comparison.boundingBox())!;
  const logo = (await logos.first().boundingBox())!;
  expect(logo.width).toBeGreaterThan(100);
  for (const fraction of [0.48, 0.25, 0.75]) {
    const bar = (await divider.boundingBox())!;
    const x = bar.x + bar.width / 4;
    await page.mouse.move(x, bar.y + bar.height / 2);
    await page.mouse.down();
    await page.mouse.move(x, bounds.y + bounds.height * fraction);
    await page.mouse.up();
    await expect.poll(async () => Math.abs((await divider.boundingBox())!.y - bounds.y - bounds.height * fraction)).toBeLessThan(2);
    for (const layer of await logos.all()) {
      const box = (await layer.boundingBox())!;
      expect(Math.abs(box.y - logo.y)).toBeLessThan(1);
      expect(box.width).toBe(logo.width);
    }
    expect(await handle.evaluate(el => {
      const rect = el.getBoundingClientRect();
      return el.contains(document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2));
    })).toBe(true);
  }
});

test('Accordion меняет направление во время раскрытия и учитывает уменьшение движения', async ({ page }) => {
  await page.goto('/iframe.html?id=components-accordion-info--docs&viewMode=docs');
  const header = page.getByRole('button', { name: 'Требования', exact: true });
  await header.scrollIntoViewIfNeeded();
  const heights = await header.evaluate(async button => {
    const panel = document.getElementById(button.getAttribute('aria-controls')!)!;
    button.click();
    await new Promise(requestAnimationFrame);
    const transition = panel.getAnimations()[0];
    await transition.ready;
    transition.pause();
    transition.currentTime = Number(transition.effect!.getTiming().duration) / 2;
    const halfway = panel.getBoundingClientRect().height;
    const full = panel.querySelector('[data-ui-accordion-content]')!.getBoundingClientRect().height;
    button.click();
    return { halfway, full };
  });
  expect(heights.halfway).toBeGreaterThan(0);
  expect(heights.halfway).toBeLessThan(heights.full);
  const panel = header.locator('..').locator('[data-ui-accordion-content-container]');
  await expect.poll(async () => (await panel.boundingBox())?.height ?? 0).toBe(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await header.press('Enter');
  await expect(panel).toHaveCSS('transition-duration', '0s');
  await expect(panel).toHaveAttribute('aria-hidden', 'false');
  await expect(panel).toBeVisible();
});

test('Код из справочника назначается партии перетаскиванием, кликом и с клавиатуры', async ({ page }) => {
  await page.goto('/iframe.html?id=table-stories--docs&viewMode=docs');
  await page.getByText('Назначение кода дефекта партии', { exact: true }).first().scrollIntoViewIfNeeded();
  const source = page.getByRole('table', { name: 'Справочник кодов дефектов' });
  const journal = page.getByRole('table', { name: 'Журнал ОТК' });
  const first = journal.getByRole('row').nth(1);
  const second = journal.getByRole('row').nth(2);
  const codeCell = first.getByRole('cell').last();
  const code = source.getByRole('button', { name: 'DEF-014' });
  const product = first.getByText('Лист г/к 4мм');
  await expect(code).toHaveAttribute('draggable', 'true');
  await expect(source.locator('tr[draggable=true]')).toHaveCount(0);
  await source.getByText('Неполное соединение').click();
  await expect(code).toHaveAttribute('aria-pressed', 'false');
  await code.scrollIntoViewIfNeeded();
  await code.hover();
  const start = (await code.boundingBox())!;
  const x = start.x + start.width / 2;
  const y = start.y + start.height / 2;
  await page.mouse.down();
  await page.mouse.move(x + 10, y, { steps: 4 });
  await product.scrollIntoViewIfNeeded();
  const target = (await product.boundingBox())!;
  await page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect(codeCell).toHaveText('DEF-014');
  await source.getByRole('button', { name: 'DEF-027' }).click();
  await expect(codeCell).toContainText('DEF-014');
  await second.getByText('ПБ-240203').click();
  await expect(second.getByRole('cell').last()).toHaveText('DEF-027');
  await expect(codeCell).toHaveText('DEF-014');
  await source.getByRole('button', { name: 'DEF-088' }).press('Space');
  await first.getByRole('button', { name: 'Назначить DEF-088 партии ПБ-240201' }).press('Enter');
  await expect(codeCell).toHaveText('DEF-088');
  await expect(page.getByRole('status').filter({ hasText: 'Партии ПБ-240201 назначен код DEF-088' })).toBeVisible();
});
