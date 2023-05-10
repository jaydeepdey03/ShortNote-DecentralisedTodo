import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    colors: {
        light: {},
        dark: {}
    },
    fonts: {
        poppins: `'Poppins', 'sans-serif'`,
    },

    colorModeTransition: {
        duration: 0.5,
        easing: 'linear'
    }
})

export default theme