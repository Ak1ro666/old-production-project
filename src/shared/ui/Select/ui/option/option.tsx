import styles from './option.module.scss';

export function Option({
  value,
  content,
  disabled,
}: {
  value: string;
  content: string;
  disabled?: boolean;
}) {
  return (
    <option className={styles.option} value={value} disabled={disabled}>
      {content}
    </option>
  );
}
