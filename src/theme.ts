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
        bg: mode("gray.100", "gray.800")(props),
      },
    }),
  },
})

export default theme
