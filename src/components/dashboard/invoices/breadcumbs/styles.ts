"use client"

import styled from 'styled-components';
import Link from "next/link";

export const Nav = styled.nav`
    margin-bottom: 1.5rem;
    display: block;
`;

export const BreadcrumbList = styled.ol`
    display: flex;
    font-size: 1.25rem;
    list-style: none;

    @media (min-width: 768px) {
        font-size: 1.5rem !important;
    }
`;

export const BreadcrumbItem = styled.li<{ $active?: boolean }>`
    color: ${({theme, $active}) => ($active ? theme["green-300"] : theme["gray-500"])};
`;

export const LinkItem = styled(Link)`
    font-size: 1.25rem;

    @media (min-width: 768px) {
        font-size: 1.5rem !important;
    }
`;

export const Separator = styled.span`
    margin: 0 0.75rem;
    display: inline-block;
`;