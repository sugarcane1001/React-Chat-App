import Head from "next/head"
import Sidebar from "../../components/Sidebar"
import { Avatar, Button, Flex, FormControl, Heading, Input, Text} from "@chakra-ui/react"
import { Router, useRouter } from "next/router"
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { addDoc, collection, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import { query } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebaseconfig";
import { doc } from "firebase/firestore";
import getOtherEmail from "../../utils/getOtherEmail";
import { useState } from "react";

const Topbar = ({email}) => {
    return (
        <Flex
            bg="gray.100"
            h="81px"
            w="100%"
            align="center"
            p={5}

        >
            <Avatar src="" marginEnd={3}/>
            <Heading size="md">{email}</Heading>
        </Flex>
    )
}

const Bottombar = ({id, user}) => {
    const [input, setInput] = useState("");
    //console.log(input);

    const sendMessage = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, `chats/${id}/messeges`), {
            text: input,
            sender: user.email,
            timestamp: serverTimestamp()
        })
        
        setInput("");
    }

    return(
        <FormControl
            p={3}
            onSubmit={sendMessage}
            as="form"
        >
            <Input placeholder="Type your message..." autoComplete="off" onChange={(e) => setInput(e.target.value)} value={input}/>
            <Button type="submit" hidden>Submit</Button>
        </FormControl>
    )
}

export default function Chat(){

    const router = useRouter();
    const { id } = router.query;
    //console.log(id);

    const q = query(collection(db, `chats/${id}/messeges`), orderBy("timestamp"));
    const [messages] = useCollectionData(q);
    //console.log(messages);

    const [user] = useAuthState(auth);

    const [chat] = useDocumentData(doc(db, `chats/${id}`));
    console.log(chat)

    const getMessages = () => 
        messages?.map(msg => {

            const sender = msg.sender === user.email;

            return (
                <Flex key={Math.random()} alignSelf={sender? "flex-start" : "flex-end"} bg={sender? "blue.100" : "green.100"} width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                    <Text>{msg.text}</Text>
                </Flex>
            )
        })
    

    return (

        <Flex h="100vh">
            <Head>
                <title>Inbox</title>
            </Head>
            <Sidebar />

            <Flex 
                //bg="blue.100"
                flex={1}
                direction="column"
            >

                <Topbar email={getOtherEmail(chat?.users, user)}/>

                <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{scrollbarWidth: "none"}}>

                    {getMessages()}

                </Flex>

                <Bottombar id={id} user={user}/>

            </Flex>
        </Flex>

    )
}