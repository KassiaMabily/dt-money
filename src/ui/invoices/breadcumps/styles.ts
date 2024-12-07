"use client"

import styled from 'styled-components';

export const Nav = styled.nav`
    aria-label: Breadcrumb;
    margin-bottom: 1.5rem;
    display: block;
`;

export const BreadcrumbList = styled.ol`
    display: flex;
    font-size: 1.25rem;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const BreadcrumbItem = styled.li<{ active?: boolean }>`
    color: ${({active}) => (active ? 'rgb(17, 24, 39)' : 'rgb(107, 114, 128)')};
`;

export const Separator = styled.span`
    margin: 0 0.75rem;
    display: inline-block;
`;