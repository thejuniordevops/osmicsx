/**
 * @osmicsx/core
 *
 * (c) Rully Ardiansyah <de.voresyah@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Base Color
import colors from './data/colors'

// Spacing
import padding from './src/padding';
import margin from './src/margin';

// Typography
import textColor from './src/text-color';
import textSize from './src/text-size';
import textAlign from "./src/text-align";
import textStyle from './src/text-style';
import textTransform from './src/text-transform';
import letterSpacing from './src/letter-spacing';
import lineHeight from './src/line-height';
import verticalAlign from './src/vertical-align';

// Background Color
import backgroundColor from './src/background-color';

// Flex
import flex from './src/flex';
import flexWrap from './src/flex-wrap';
import flexDirection from './src/flex-direction';
import flexGrow from './src/flex-grow';
import flexShrink from './src/flex-shrink';
import alignItems from './src/align-items';
import alignContent from './src/align-content';
import alignSelf from './src/align-self';
import justifyContent from './src/justify-content';

// Border
import borderColor from './src/border-color';
import borderStyle from './src/border-style';
import borderWidth from './src/border-width';
import borderRadius from './src/border-radius';

// Effect
import shadow from './src/shadow';
import opacity from './src/opacity';

// Transform
import rotate from './src/rotate';

// Position
import position from './src/position';

// Overflow
import overflow from './src/overflow';

// Resize (only for image)
import resizeMode from './src/resize-mode';

// Inset
import trbl from './src/trbl';

// Z-Index
import zIndex from './src/z-index';

// Import Scale Utility
import { scaleWidth, scaleHeight } from './lib/scale'

/**
 * Mapping all styles
 */
let map = {
  // Spacing
  ...padding,
  ...margin,

  // Typography
  ...textSize,
  ...textColor,
  ...textAlign,
  ...textStyle,
  ...textTransform,
  ...letterSpacing,
  ...lineHeight,
  ...verticalAlign,

  // Background Color
  ...backgroundColor,

  // Flex
  ...flex,
  ...flexWrap,
  ...flexDirection,
  ...flexGrow,
  ...flexShrink,
  ...alignItems,
  ...alignContent,
  ...alignSelf,
  ...justifyContent,

  // Border
  ...borderColor,
  ...borderStyle,
  ...borderWidth,
  ...borderRadius,

  // Effect
  ...shadow,
  ...opacity,

  // Transform
  ...rotate,

  // Position
  ...position,

  // Overflow
  ...overflow,

  // Resize (only for image)
  ...resizeMode,

  // Inset
  ...trbl,

  // Z-Index
  ...zIndex
};

/**
 * Font family helper
 */
const family = (name) => ({
  fontFamily: name
})

/**
 * Helper function for group styling
 */
const apply = (namespace) => {
  let obj = {};

  namespace.map((item) => {
    if (typeof item === "object") {
      obj = {
        ...obj,
        ...item
      }
    } else {
      obj = {
        ...obj,
        ...map[item]
      }
    }
  });

  return obj
};

/**
 * Default method for styling
 */
const styles = (namespace) => {
  let obj = {};

  if (Array.isArray(namespace)) {
    namespace.map((item) => {
      obj = {
        ...obj,
        ...map[item]
      }
    })
  } else {
    obj = map[namespace]
  }

  return obj
};

/**
 * Export helper method
 */
export {
  colors,
  apply,
  family,
  scaleWidth,
  scaleHeight
}

export default styles
