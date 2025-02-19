import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export function Counter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <Button
        data-testid="increment-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={increment}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={decrement}
      >
        {t('decrement')}
      </Button>
      <h1 data-testid="value-title">{counterValue}</h1>
    </div>
  );
}
