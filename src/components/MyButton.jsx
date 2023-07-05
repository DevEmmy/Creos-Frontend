import { Button, Text } from '@chakra-ui/react'
import React from 'react'

const MyButton = ({text, background, callBack, padding="24px 52px", borderRadius, bg, color, fontSize, border, width="fit-content", children, margin}) => {
  return (
    <Button 
        variant={"unstyled"}
        onClick={callBack}
        borderRadius={borderRadius || 0}
        background={bg || background}
        border={border}
        color={color}
        fontSize={fontSize}
        width={width}
        height={"auto"}
        margin={margin}
    >
        <Text padding={padding}>
            {children || text}
        </Text>
    </Button>
  )
}

export default MyButton