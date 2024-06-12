import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { px } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import getOtherEmail from "../utils/getOtherEmail";
import { useRouter } from "next/router";


export default function Sidebar() {
    const [user] = useAuthState(auth);
    const [snapshot, loading, error] = useCollection(collection(db, "chats"));
    const chats = snapshot?.docs.map(doc => ({id: doc.id, ...doc.data()}));
    const router = useRouter();

    const redirect = (id) => {
        router.push(`/chat/${id}`);
    }

    const chatExists = email => chats?.find(chat => (chat.users.includes(user.email) && chat.users.includes(email)));

    const newChat = async () => {
        const input = prompt("Enter email of receipient");
        
        if(!chatExists(input) && (input != user.email)){
            await addDoc(collection(db, "chats"), { users: [user.email, input] });
        }
    }

    const chatList = () => {
        return (
            chats?.filter(chat => chat.users.includes(user.email))
            .map(
                chat => 
                    <Flex key={Math.random()} padding={3} align="center" _hover={{bg: "gray.100", cursor:"pointer"}} onClick={() => redirect(chat.id)}>
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

            <Button m={5} p={4} onClick={() => newChat()}>New Chat</Button>

            <Flex overflowX="scroll" direction="column" flex={1} /*sx={{scrollbarWidth: "auto"}}*/>
                {chatList()}
            </Flex>
            
        </Flex>
    )
}