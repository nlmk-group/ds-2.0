/**
 * Утилиты для валидации иконок в Builder.io мапперах
 * Предотвращает ошибки с несуществующими иконками
 */

/**
 * Карта замены несуществующих иконок на реально существующие
 */
export const ICON_FALLBACK_MAP: Record<string, string> = {
  // Основные замены
  IconCheckFilled24: 'IconDoneCheckFilled24',
  IconUserFilled24: 'IconPersonFilled24',
  IconSettingsFilled24: 'IconSettingsAltFilled24',
  IconHomeFilled24: 'IconHomeOutlined24',
  IconEditFilled24: 'IconEditPenFilled24',
  IconDeleteFilled24: 'IconDeleteBinFilled24',
  IconErrorFilled24: 'IconWarningFilled24',
  IconHeartFilled24: 'IconSuccessFilled24',

  // Размеры 16px
  IconCheckFilled16: 'IconDoneCheckFilled16',
  IconUserFilled16: 'IconPersonFilled16',
  IconSettingsFilled16: 'IconSettingsAltFilled16',
  IconEditFilled16: 'IconEditPenFilled16',
  IconDeleteFilled16: 'IconDeleteBinFilled16',
  IconErrorFilled16: 'IconWarningFilled16',

  // Размеры 32px
  IconCheckFilled32: 'IconDoneCheckFilled32',
  IconUserFilled32: 'IconPersonFilled32',
  IconSettingsFilled32: 'IconSettingsAltFilled32',
  IconEditFilled32: 'IconEditPenFilled32',
  IconDeleteFilled32: 'IconDeleteBinFilled32',
  IconErrorFilled32: 'IconWarningFilled32'
};

/**
 * Список реально существующих популярных иконок
 */
export const VALID_ICONS = [
  // 24px иконки
  'IconAddPlusFilled24',
  'IconArrowLeftFilled24',
  'IconArrowRightFilled24',
  'IconArrowDownFilled24',
  'IconArrowUpFilled24',
  'IconCloseFilled24',
  'IconDoneCheckFilled24',
  'IconSearchFilled24',
  'IconSettingsAltFilled24',
  'IconHomeOutlined24',
  'IconPersonFilled24',
  'IconSuccessFilled24',
  'IconEditPenFilled24',
  'IconDeleteBinFilled24',
  'IconInfoFilled24',
  'IconWarningFilled24',

  // 16px иконки
  'IconAddPlusFilled16',
  'IconCloseFilled16',
  'IconDoneCheckFilled16',
  'IconSearchFilled16',

  // 32px иконки
  'IconAddPlusFilled32',
  'IconCloseFilled32',
  'IconDoneCheckFilled32',
  'IconSearchFilled32',

  // Outlined варианты
  'IconArrowLeftOutlined24',
  'IconArrowRightOutlined24',
  'IconPersonOutlined24',
  'IconSettingsAltOutlined24',
  'IconSuccessOutlined24',
  'IconDeleteBinOutlined24',
  'IconEditPenOutlined24'
] as const;

/**
 * Функция валидации имени иконки
 * @param iconName - имя иконки из Figma
 * @param componentName - имя компонента для логирования
 * @returns валидное имя иконки
 */
export const getValidIconName = (iconName: string, componentName = 'Unknown'): string => {
  // Проверяем, есть ли прямая замена
  if (ICON_FALLBACK_MAP[iconName]) {
    // eslint-disable-next-line no-console
    console.warn(
      `⚠️ Builder.io ${componentName} Mapper: Иконка "${iconName}" заменена на "${ICON_FALLBACK_MAP[iconName]}"`
    );
    return ICON_FALLBACK_MAP[iconName];
  }

  // Проверяем, существует ли иконка в списке валидных
  if (VALID_ICONS.includes(iconName as any)) {
    return iconName;
  }

  // Если иконка не найдена, используем fallback
  // eslint-disable-next-line no-console
  console.warn(
    `⚠️ Builder.io ${componentName} Mapper: Иконка "${iconName}" не найдена. Используется fallback "IconAddPlusFilled24"`
  );
  return 'IconAddPlusFilled24';
};

/**
 * Проверяет, существует ли иконка
 * @param iconName - имя иконки
 * @returns true, если иконка существует
 */
export const isValidIcon = (iconName: string): boolean => {
  return VALID_ICONS.includes(iconName as any) || Boolean(ICON_FALLBACK_MAP[iconName]);
};
