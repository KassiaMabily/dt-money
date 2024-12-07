import {roboto} from "@/components/ui/fonts";
import {ReactNode} from "react";
import {ClientLayoutDynamic, StyledComponentsRegistryDynamic} from "@/lib/dynamic";

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={roboto.className}>
        <StyledComponentsRegistryDynamic>
            <ClientLayoutDynamic>
                {children}
            </ClientLayoutDynamic>
        </StyledComponentsRegistryDynamic>
        </body>
        </html>
    );
}
