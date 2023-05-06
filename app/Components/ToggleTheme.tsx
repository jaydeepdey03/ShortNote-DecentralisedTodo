import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import React from 'react'

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button 
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        onClick={toggleColorMode}
        transition="background 0.2s ease"
        >{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
    )
}

export default ToggleTheme