import { Button, ButtonTheme } from '@/shared/ui/Button';

import styles from './edit-actions.module.scss';

export function EditActions({
  title,
  onClick,
  additionalTitle,
  additionalOnClick,
  isEdited,
}: {
  title?: string;
  onClick?: () => void;
  additionalTitle?: string;
  additionalOnClick?: () => void;
  isEdited?: boolean;
}) {
  return (
    <div className={styles.editActions}>
      <Button theme={ButtonTheme.PRIMARY} onClick={onClick}>
        {title}
      </Button>
      {isEdited && (
        <Button theme={ButtonTheme.OUTLINE_RED} onClick={additionalOnClick}>
          {additionalTitle}
        </Button>
      )}
    </div>
  );
}
