import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";

export default function App({ Component, pageProps }) {
  //return <Component {...pageProps} />;

  return (
  <ChakraProvider>
    <Login />
  </ChakraProvider>
  )
}
