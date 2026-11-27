import React, { useMemo, useRef, useState } from 'react';

import CopyCodeButton from '@components/_storybook/Stories/components/CopyCodeButton';
import { usePreviewTheme } from '@components/_storybook/Stories/usePreviewTheme';
import { Button, Input, OptionItem, Pagination, SimpleSelect, ToggleButtonGroup } from '@components/index';
import { Themes } from '@components/Theme/types';
import { Highlight, themes } from 'prism-react-renderer';

import styles from './Icon.module.scss';

import icons from '../IconsDirectory';
import type { TIconName } from '../IconsDirectory/unionType';

const sizes = Object.keys(icons);
const families = new Map<string, TIconName[]>();
for (const size of sizes) {
  for (const name of Object.keys(icons[size]) as TIconName[]) {
    const family = name.slice(4, -size.length);
    const variants = families.get(family) ?? [];
    variants.push(name);
    families.set(family, variants);
  }
}
const entries = Array.from(families).sort(([a], [b]) => a.localeCompare(b, 'en'));
const pageSize = 18;

function Glyph({ name, color }: { name: TIconName; color?: string }) {
  const Component = icons[name.slice(-2)][name]!;
  return <Component htmlColor={color} />;
}

export default function IconCatalog() {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState('');
  const theme = usePreviewTheme();
  const colorPicker = useRef<HTMLInputElement>(null);
  const [customColor, setColor] = useState('');
  const color = customColor || (theme === Themes.DARK ? '#619eff' : '#1952b6');
  const [page, setPage] = useState(1);
  const [selection, setSelection] = useState<TIconName>();

  const results = useMemo(() => {
    const query = search.trim().replace(/\s+/g, '').toLowerCase();
    return entries.flatMap(([family, variants]) => {
      const names = variants.filter(name => name.endsWith(size) && name.toLowerCase().includes(query));
      return names.length ? [{ family, names }] : [];
    });
  }, [search, size]);

  const visible = results.slice((page - 1) * pageSize, page * pageSize);
  const active = visible.find(({ names }) => selection && names.includes(selection)) ?? visible[0];
  const name =
    active &&
    (active.names.find(item => item === selection) ??
      active.names.find(item => item.endsWith('24')) ??
      active.names[0]);
  const jsx = name
    ? `import { ${name} } from '@nlmk/ds-2.0';\n\nexport default () => <${name}${color ? ` htmlColor="${color}"` : ''} />;`
    : '';

  const updateSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <section aria-label="Каталог иконок" className={styles.catalog}>
      <div className={styles.filters}>
        <Input
          label="Поиск иконок"
          placeholder="Например, Search или IconSearchOutlined24"
          value={search}
          onChange={event => updateSearch(event.target.value)}
          reset
          onReset={() => updateSearch('')}
        />
        <div className={styles.field}>
          <SimpleSelect
            label="Размер"
            value={size || 'all'}
            onChange={value => {
              setSize(value === 'all' ? '' : String(value));
              setPage(1);
            }}
          >
            <OptionItem value="all" label="Все размеры">
              Все размеры
            </OptionItem>
            {sizes.map(value => (
              <OptionItem key={value} value={value} label={value + ' px'}>
                {value} px
              </OptionItem>
            ))}
          </SimpleSelect>
        </div>
      </div>
      <div className={styles.resultsCount} role="status">
        Найдено иконок: {results.length}
      </div>
      {name && active ? (
        <div className={styles.browser}>
          <div className={styles.results}>
            <div className={styles.grid}>
              {visible.map(({ family, names }) => {
                const current = family === active.family ? name : (names.find(item => item.endsWith('24')) ?? names[0]);
                return (
                  <Button
                    variant="secondary"
                    color={family === active.family ? 'brand' : 'grey'}
                    key={family}
                    type="button"
                    className={styles.tile}
                    aria-pressed={family === active.family}
                    onClick={() => setSelection(current)}
                  >
                    <span className={styles.tileContent}>
                      <span aria-hidden="true">
                        <Glyph name={current} color={color} />
                      </span>
                      {family.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
          <aside
            data-show-mobile={Boolean(
              visible.some(item => selection && item.names.includes(selection)) || results.length === 1
            )}
            className={styles.detail}
            aria-label="Выбранная иконка"
          >
            <div className={styles.sample}>
              <Glyph name={name} color={color} />
            </div>
            <div className={styles.copyName}>
              <code>{name}</code>
              <CopyCodeButton key={name} code={name} label="Копировать имя" copiedLabel="Имя скопировано" />
            </div>
            <div className={styles.settings}>
              <div className={styles.setting}>
                <span>Размер</span>
                <div role="group" aria-label="Размер выбранной иконки">
                  <ToggleButtonGroup size="s" key={active.family}>
                    {active.names.map(item => (
                      <ToggleButtonGroup.Button key={item} active={item === name} onClick={() => setSelection(item)}>
                        <ToggleButtonGroup.Button.Label>{item.slice(-2)} px</ToggleButtonGroup.Button.Label>
                      </ToggleButtonGroup.Button>
                    ))}
                  </ToggleButtonGroup>
                </div>
              </div>
              <div className={styles.setting}>
                <span>Цвет иконки</span>
                <div className={styles.colorAnchor}>
                  <Button
                    type="button"
                    variant="secondary"
                    size="s"
                    aria-label="Выбрать цвет иконки"
                    startIcon={<span className={styles.swatch} style={{ backgroundColor: color }} />}
                    onClick={() => colorPicker.current?.click()}
                  >
                    {color.toUpperCase()}
                  </Button>
                  <input
                    ref={colorPicker}
                    type="color"
                    tabIndex={-1}
                    aria-hidden="true"
                    value={color}
                    onChange={event => setColor(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.codeHeader}>
              Пример JSX <CopyCodeButton key={jsx} code={jsx} />
            </div>
            <Highlight code={jsx} language="tsx" theme={theme === Themes.DARK ? themes.vsDark : themes.github}>
              {({ tokens, style, getTokenProps }) => (
                <pre className={styles.snippet} style={style}>
                  <code>
                    {tokens.map((line, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && '\n'}
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </React.Fragment>
                    ))}
                  </code>
                </pre>
              )}
            </Highlight>
          </aside>
          {results.length > pageSize && (
            <div className={styles.footer}>
              <Pagination
                className={styles.pagination}
                currentPage={page}
                setCurrentPage={setPage}
                maxPageCount={Math.ceil(results.length / pageSize)}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Подходящих иконок нет.</p>
          <Button
            variant="secondary"
            onClick={() => {
              updateSearch('');
              setSize('');
            }}
          >
            Сбросить фильтры
          </Button>
        </div>
      )}
    </section>
  );
}
