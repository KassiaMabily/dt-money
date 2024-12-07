'use client'
import dynamic from "next/dynamic";

export const StyledComponentsRegistryDynamic = dynamic(
    () => import("@/lib/styled/styled-components-registry").then((module) => module.default),
    {
        ssr: false,
    }
);

export const ClientLayoutDynamic = dynamic(
    () => import("@/lib/styled/client-layout").then((module) => module.default),
    {
        ssr: false,
    }
);

