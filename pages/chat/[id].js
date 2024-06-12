import Head from "next/head"
import Sidebar from "../../components/Sidebar"
import { Avatar, Button, Flex, FormControl, Heading, Input, Text} from "@chakra-ui/react"

const Topbar = () => {
    return (
        <Flex
            bg="gray.100"
            h="81px"
            w="100%"
            align="center"
            p={5}

        >
            <Avatar src="" marginEnd={3}/>
            <Heading size="md">user@gmail.com</Heading>
        </Flex>
    )
}

const Bottombar = () => {
    return(
        <FormControl
            p={3}
        >
            <Input placeholder="Type your message..." autoComplete="off"/>
            <Button type="submit" hidden>Submit</Button>
        </FormControl>
    )
}

export default function Chat(){
    return (

        <Flex h="100vh">
            <Head>
                <title>Chat App Inbox</title>
            </Head>
            <Sidebar />

            <Flex 
                //bg="blue.100"
                flex={1}
                direction="column"
            >

                <Topbar />

                <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{scrollbarWidth: "none"}}>

                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>hi</Text>
                    </Flex>
                    <Flex bg="green.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>hi</Text>
                    </Flex>
                    <Flex bg="green.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>hi</Text>
                    </Flex>
                    <Flex bg="green.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>hi</Text>
                    </Flex>
                    <Flex bg="green.100" width="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                </Flex>

                <Bottombar />

            </Flex>
        </Flex>

    )
}