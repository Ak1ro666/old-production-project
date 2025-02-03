/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { FormConfig, FormValue } from './types';
import { Field } from '../field/field';
import { Button } from '@/shared/ui/Button';

import styles from './form.module.scss';

export function Form({
  config,
  defaultValues,
  onChange,
  disabled,
}: {
  config: FormConfig;
  defaultValues?: FormValue;
  onChange?: (data: FormValue) => void;
  disabled?: boolean;
}) {
  const [formState, setFormState] = useState<Partial<FormValue>>({});

  const getFieldValue = (name: string) => formState[name] ?? defaultValues?.[name];

  const handleChangeField = (name: string) => (value: unknown) =>
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  const handleReset = () => {
    setFormState({});
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onChange?.({ ...defaultValues, ...formState });
  };

  return (
    <form className={styles.form}>
      {config.fields.map((field) => (
        <Field
          key={field.name}
          config={field}
          value={getFieldValue(field.name)}
          onChange={handleChangeField(field.name)}
        />
      ))}
      <div className={styles.actions}>
        <Button disabled={disabled} type="button" onClick={handleSubmit}>
          Обновить
        </Button>
        <Button disabled={disabled} type="button" onClick={handleReset}>
          Сбросить
        </Button>
      </div>
    </form>
  );
}
