import {roboto} from "@/components/ui/fonts";
import {ReactNode} from "react";
import {ClientLayoutDynamic, StyledComponentsRegistryDynamic} from "@/lib/dynamic";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: {
        template: '%s | DT Money Dashboard',
        default: 'DT Money Dashboard',
    },
    description: 'The official Next.js Course Dashboard, built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

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
