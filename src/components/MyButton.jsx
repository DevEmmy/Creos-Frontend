import { Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const MyButton = ({text, background, inactive = true, callBack, padding="24px 52px", borderRadius, bg, color, fontSize, border, width="fit-content", children, margin}) => {

  const [mainText, setMainText] = useState(children || text)



  const changeText = (hover)=>{
    if(hover && inactive){
      setMainText("Coming Soon...")
    }
    else{
      setMainText(children || text)
    }
  }
  

  return (
    <Button 
        variant={"unstyled"}
        onClick={callBack}
        borderRadius={borderRadius || 0}
        background={bg || background}
        border={border}
        color={color}
        fontSize={fontSize}
        onMouseOver={()=> changeText(true)}

        onMouseOut={()=> changeText(false)}
        width={width}
        height={"auto"}
        margin={margin}
    >
        <Text padding={padding}>
            {mainText}
        </Text>
    </Button>
  )
}

export default MyButton