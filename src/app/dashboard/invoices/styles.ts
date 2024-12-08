"use client"

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 2rem;
`;

export const SearchBar = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    height: 3rem;

    @media (min-width: 768px) {
        margin-top: 2rem;
    }
`;

export const PaginationWrapper = styled.div`
    margin-top: 1.25rem;
    display: flex;
    width: 100%;
    justify-content: center;
`;