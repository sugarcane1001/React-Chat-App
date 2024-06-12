import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { px } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore";
import { db } from "../firebaseconfig";
import getOtherEmail from "../utils/getOtherEmail";


export default function Sidebar() {
    const [user] = useAuthState(auth);
    const [snapshot, loading, error] = useCollection(collection(db, "chats"));
    const chats = snapshot?.docs.map(doc => ({id: doc.id, ...doc.data()}));
    
    const chatList = () => {
        return (
            chats?.filter(chat => chat.users.includes(user.email))
            .map(
                chat => 
                    <Flex key={Math.random()} padding={3} align="center" _hover={{bg: "gray.100", cursor:"pointer"}}>
                        <Avatar src="" marginEnd={3}/>
                        <Text>{getOtherEmail(chat.users, user)}</Text>
                    </Flex>
            )
        )
    }

    return (
        <Flex
            //bg="green.100"
            w="300px"
            h="100%"
            borderEnd="1.5px solid"
            borderColor="gray.200"
            direction="column"
        >
            <Flex
                h="81px"
                w="100%"
                //bgColor="red.100"
                align="center"
                justifyContent="space-between"
                padding={3}
                borderBottom="1px solid"
                borderColor="gray.200"
            >
                <Flex align="center">
                    <Avatar src={user.photoURL} marginEnd={3}/>
                    <Text>{user.displayName}</Text>   
                </Flex>

                <IconButton size="sm" rounded="xl" icon={<ArrowLeftIcon/>} onClick={() => signOut(auth)}/>
            </Flex>

            <Button m={5} p={4}>New Chat</Button>

            <Flex overflowX="scroll" direction="column" flex={1} /*sx={{scrollbarWidth: "auto"}}*/>
                {chatList()}
            </Flex>
            
        </Flex>
    )
}