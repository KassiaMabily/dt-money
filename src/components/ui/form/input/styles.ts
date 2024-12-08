"use client"

import styled from "styled-components";

export const InputContainer = styled.div`
    border-radius: 0.375rem;
    position: relative;
    width: 100%;

    & > svg {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        height: 18px;
        width: 18px;
        transform: translateY(-50%);
        color: ${(props) => props.theme["gray-400"]};
    }
`;

export const InputElement = styled.input`
    display: block;
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5625rem 0.625rem 0.5625rem 2.5rem; /* 9px for top/bottom and 10px for left */
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
    height: calc(3rem + 2px);
    background: ${(props) => props.theme["gray-900"]};
    outline: none;
    border: none;

    &::placeholder {
        color: ${(props) => props.theme["gray-400"]};
    }
`;
