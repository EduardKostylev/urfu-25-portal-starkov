import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: {
                        value: { _light: "{#F7FAFC}", _dark: "{#000}" }
                    }
                },
                fg: {
                    DEFAULT: {
                        value: { _light: "{#000}", _dark: "{#FFF}" }
                    }
                }
            }
        }
    }
})

export const system = createSystem(defaultConfig, config);