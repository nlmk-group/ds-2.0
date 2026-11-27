import React, { FormEvent, useEffect, useId, useRef, useState } from 'react';

import { Box, Button, Input } from '@components/index';

const fields = [
  { key: 'material', label: 'Материал', error: 'Укажите материал' },
  { key: 'address', label: 'Адрес поставки', error: 'Укажите адрес поставки' }
] as const;

export default function FormValidationExample() {
  const prefix = useId();
  const summary = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState({ material: '', address: '' });
  const [attempt, setAttempt] = useState(0);
  const [sent, setSent] = useState(false);
  const invalid = attempt ? fields.filter(field => !values[field.key].trim()) : [];
  useEffect(() => {
    if (attempt) summary.current?.focus();
  }, [attempt]);

  function submit(event: FormEvent) {
    event.preventDefault();
    setAttempt(value => value + 1);
    setSent(fields.every(field => values[field.key].trim()));
  }

  return (
    <form noValidate onSubmit={submit}>
      <Box flexDirection="column" gap="12px">
        {invalid.length > 0 && (
          <div ref={summary} tabIndex={-1} role="group" aria-label="Исправьте поля">
            <strong>Исправьте поля</strong>
            <ul>
              {invalid.map(field => {
                const id = prefix + field.key;
                return (
                  <li key={id}>
                    <a
                      href={'#' + id}
                      onClick={event => {
                        event.preventDefault();
                        event.currentTarget.ownerDocument.getElementById(id)?.focus();
                      }}
                    >
                      {field.error}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {fields.map(field => {
          const error = invalid.includes(field);
          return (
            <Input
              key={field.key}
              id={prefix + field.key}
              name={field.key}
              required
              multiline={field.key === 'address'}
              label={field.label}
              value={values[field.key]}
              aria-invalid={error}
              helperText={error ? field.error : undefined}
              onChange={event => {
                setValues({ ...values, [field.key]: event.target.value });
                setSent(false);
              }}
            />
          );
        })}
        <Button type="submit">Отправить заявку</Button>
        {sent && <div role="status">Заявка отправлена</div>}
      </Box>
    </form>
  );
}
