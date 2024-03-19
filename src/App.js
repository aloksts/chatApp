import {Box,Container,VStack,Input,HStack,Button} from "@chakra-ui/react";
import {getAuth,GoogleAuthProvider,SignInWithPopup} from "firebase/auth";
import Message from "./components/Message";
import {app} from "./firebase";

const auth= getAuth(app);
const loginHandler=()=>{
  const provider = new GoogleAuthProvider();
  SignInWithPopup(auth,provider);
}
function App() {
  return (
    <Box bg={"red.50"}>
      <Container h={"100vh"} bg={"white"}>
        <VStack h="full" >
          <Button colorScheme={"red"} w={"full"}>Logout</Button>
        
        <VStack h="full" w={"full"} overflow={"auto"}>
          <Message text={"Hii Alok"}/>
          <Message user="me" text={"good morning"} />
                 </VStack>
        <form style={{width:"100%",backgroundColor:"white"}}> 
          <HStack>
            <Input placeholder="enter message"/>
            <Button type="submit" colorScheme={"purple"}>send</Button>
          </HStack>
          
        </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
