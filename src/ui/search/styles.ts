'use client'
import styled from "styled-components";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-shrink: 0;
`;

export const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: none;
`;

export const Input = styled.input`
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

export const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon)`
    position: absolute;
    left: 0.75rem;
    top: 50%;
    height: 18px;
    width: 18px;
    transform: translateY(-50%);
    color: ${(props) => props.theme["gray-400"]};

    .peer:focus & {
        color: ${(props) => props.theme["gray-500"]};
    }
`;