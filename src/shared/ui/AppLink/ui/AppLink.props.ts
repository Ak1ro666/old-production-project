import { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'inverted_primary',
  INVERTED_SECONDARY = 'inverted_secondary',
}

export interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}
