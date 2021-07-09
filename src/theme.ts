import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import colors from './colors.json'

const theme = extendTheme({
  colors,
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("gray.100", "gray.800")(props),
      },
    }),
  },
})

export default theme
