"use client"

import styled from "styled-components";

export const SelectContainer = styled.div`
    position: relative;
`;

export const SelectContent = styled.select`
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