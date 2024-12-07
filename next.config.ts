import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
