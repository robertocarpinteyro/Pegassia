import colors from '../colors';
import media, { breakpoints } from '../media';
import zIndex from '../zIndex';

export default {
  cursor: colors.neonCyan,
  colors,
  zIndex,
  breakpoints: { sizes: breakpoints, ...media },
};
