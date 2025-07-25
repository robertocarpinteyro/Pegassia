import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    event => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor],
  );

  return (
    <img
      src="https://res.cloudinary.com/dxcr9utre/image/upload/v1753430606/LogosinCOMpng_lajd2f.png"
      alt="Pegassia"
      style={{ 
        height: '100px', 
        width: 'auto',
        filter: theme.name === 'dark' ? 'brightness(0) invert(1)' : 'none'
      }}
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      onClick={handleToggleTheme}
      {...rootProps}
      {...buttonProps}
    />
  );
};

export default Logo;
