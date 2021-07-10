import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import colors from './colors.json'

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'ui-rounded, "SF Pro Rounded", system-ui, san-serif',
    body: 'ui-rounded, "SF Pro Rounded", system-ui, san-serif',
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("white", "gray.900")(props),
        height: '100%',
        overflow: 'hidden'
      },
      "#root": {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'auto',
      }
    }),
  },
})

export default theme
