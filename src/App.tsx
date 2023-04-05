import { ChakraProvider, theme } from "@chakra-ui/react";
import FiltersBar from "./components/FiltersBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <FiltersBar />
  </ChakraProvider>
);
