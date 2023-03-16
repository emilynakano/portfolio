import 'styled-components';
import type dark from '../assets/theme/dark';

declare module 'styled-components' {
  type ThemeType = typeof dark;

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme extends ThemeType {}
}
