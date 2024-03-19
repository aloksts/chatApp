import React from 'react'
import { HStack,Avatar,Text } from '@chakra-ui/react'

const Message = ({uri,text,user="other"}) => {
  return (
    <HStack alignSelf={user==="me"?"flex-end":"flex-start"}borderRadius={"Base"} bg={"gray.100"} paddingY={"2"} paddingX={user==="me"?"4":"2"} >
       {
           user!=="me" && <Avatar src={uri}></Avatar>
       }
        <Text>{text}</Text>
        {
            user==="me" && <Avatar src={uri}></Avatar>
        }
    </HStack>
  )
}

export default Message

