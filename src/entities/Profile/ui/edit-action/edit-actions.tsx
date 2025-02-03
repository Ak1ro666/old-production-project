import { Button, ButtonTheme } from '@/shared/ui/Button';

import styles from './edit-actions.module.scss';

export function EditActions({ title, onClick }: { title?: string; onClick?: () => void }) {
  return (
    <div className={styles.editActions}>
      <Button theme={ButtonTheme.PRIMARY} onClick={onClick}>
        {title}
      </Button>
    </div>
  );
}
