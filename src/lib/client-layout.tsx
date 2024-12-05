"use client";

import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}
