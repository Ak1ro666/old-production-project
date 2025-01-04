import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';
import { fireEvent, screen } from '@testing-library/react';

describe('Counter', () => {
  test('test render', () => {
    renderComponent({
      component: <Counter />,
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('test increment', () => {
    renderComponent({
      component: <Counter />,
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('test decrement', () => {
    renderComponent({
      component: <Counter />,
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
