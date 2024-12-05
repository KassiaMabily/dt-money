import { ClientLayout } from "@/lib/client-layout";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { roboto } from "@/ui/fonts";
import { ReactNode } from "react";


export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={roboto.className}>
                <StyledComponentsRegistry>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
