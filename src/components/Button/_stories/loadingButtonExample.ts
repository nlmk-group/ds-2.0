export const loadingButtonExample = `import { useEffect, useState } from 'react';
import { Button } from '@nlmk/ds-2.0';

export default () => {
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!saving) return;
    const timer = setTimeout(() => setSaving(false), 1500);
    return () => clearTimeout(timer);
  }, [saving]);

  return (
    <Button type="button" size="s" loading={saving}
      onClick={() => setSaving(true)}>
      Сохранить
    </Button>
  );
};`;
