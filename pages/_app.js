import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function App({ Component, pageProps }) {
  //return <Component {...pageProps} />;

  return (
  <ChakraProvider>
    {/*<Login />*/}
    {/*<Sidebar/>*/}
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
