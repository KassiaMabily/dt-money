"use client"

import styled from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    height: 2.5rem;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #0070f3;
    padding: 0 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #ffffff;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2589fe;
    }

    &:focus-visible {
        outline: 2px solid;
        outline-offset: 2px;
        outline-color: #0070f3;
    }

    &:active {
        background-color: #2f6feb;
    }

    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;