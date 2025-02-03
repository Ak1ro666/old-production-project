import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Code.module.scss';
import { Button, ButtonTheme } from '../../Button';
import CopyIcon from '@/shared/assets/component/copy.svg';
import { memo, useCallback } from 'react';

export const Code = memo(({ text, className }: { text: string; className?: string }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <CopyIcon className={styles.icon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
