import { Button, useColorMode, Tooltip } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import React from 'react'

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
    )
}

export default ToggleTheme