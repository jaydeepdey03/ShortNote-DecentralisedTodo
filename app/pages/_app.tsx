import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import NotecontextProvider from "../context/Notecontext";
import { Mumbai } from "@thirdweb-dev/chains";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThirdwebProvider activeChain={activeChain} supportedChains={[Mumbai]}>
        <NotecontextProvider>
          <Component {...pageProps} />
        </NotecontextProvider>
      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
