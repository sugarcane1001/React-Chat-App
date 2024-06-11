import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { px } from "framer-motion";

const Chat = () => {
    return (
        <Flex padding={3} align="center" _hover={{bg: "gray.100", cursor:"pointer"}}>
            <Avatar src="" marginEnd={3}/>
            <Text>user@gmail.com</Text>
        </Flex>
    )
}

export default function Sidebar() {
    return (
        <Flex
            //bg="green.100"
            w="300px"
            //h="100vh"
            borderEnd="1.5px solid"
            borderColor="grey.200"
            direction="column"
        >
            <Flex
                h="81px"
                w="100%"
                //bgColor="red.100"
                align="center"
                justifyContent="space-between"
                padding={3}
            >
                <Flex align="center">
                    <Avatar src="" marginEnd={3}/>
                    <Text>Name</Text>   
                </Flex>

                <IconButton size="sm" rounded="xl" icon={<ArrowLeftIcon/>}/>
            </Flex>

            <Button m={5} p={4}>New Chat</Button>

            <Flex overflowX="scroll" direction="column" flex={1} /*sx={{scrollbarWidth: "auto"}}*/>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </Flex>
            
        </Flex>
    )
}