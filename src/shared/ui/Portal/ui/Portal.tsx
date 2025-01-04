import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export function Portal({
  children,
  element = document.body,
}: {
  children: ReactNode;
  element?: HTMLElement;
}) {
  return createPortal(children, element);
}
