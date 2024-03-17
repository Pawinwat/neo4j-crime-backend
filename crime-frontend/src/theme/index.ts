import { extendTheme } from "@chakra-ui/react";
import { ThemeConfig } from "@chakra-ui/react";

interface GlobalStyleProps {
  colorMode: "light" | "dark";
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
    // config
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
  config,
  colors: {
    brand: {
      500: "#2ecc71", // your brand color
    },
  },
});

export { theme };
