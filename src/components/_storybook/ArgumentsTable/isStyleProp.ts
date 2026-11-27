const layoutProps = new Set([
  'st',
  'sx',
  'css',
  'classes',
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'background',
  'bgColor',
  'htmlColor',
  'aspectRatio',
  'border',
  'borderRadius',
  'display',
  'gap',
  'flexDirection',
  'flexWrap',
  'alignItems',
  'justifyContent',
  'width',
  'height',
  'paddingSpace'
]);

// These properties configure the component itself and belong in its API reference.
const componentProps: Record<string, string[]> = {
  Breadcrumbs: ['width'],
  Drawer: ['width', 'height'],
  Icon: ['htmlColor'],
  ImagePicture: ['aspectRatio'],
  Legend: ['color'],
  SkeletonLoader: ['width', 'height'],
  Spinner: ['color', 'bgColor'],
  Typography: ['color']
};

export function isStyleProp(
  key: string,
  arg: { control?: unknown; table?: { type?: { summary?: string } } },
  component?: string
) {
  if (/className|styles?$/i.test(key) || ['st', 'sx', 'css', 'classes'].includes(key)) return true;
  if (component === 'Box' || component === 'Grid') return false;
  if (component && componentProps[component]?.includes(key)) return false;
  const control = arg.control;
  return (
    layoutProps.has(key) ||
    arg.table?.type?.summary === 'CSSProperties' ||
    (key === 'color' &&
      typeof control === 'object' &&
      control !== null &&
      'type' in control &&
      control.type === 'color')
  );
}
