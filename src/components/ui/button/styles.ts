"use client"

import styled from 'styled-components';
import Link from "next/link";

export const StyledButton = styled.button`
    display: flex;
    height: 2.5rem;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["green-300"]};
    padding: 0 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #ffffff;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme["green-500"]};
    }

    &:focus-visible {
        outline: 2px solid;
        outline-offset: 2px;
        outline-color: ${(props) => props.theme["green-300"]};
    }

    &:active {
        background-color: ${(props) => props.theme["green-300"]};
    }

    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const CancelButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-600"]};
    padding: 0 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme["gray-100"]};;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme["gray-700"]};
    }
`;