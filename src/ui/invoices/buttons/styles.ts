"use client"
import styled from 'styled-components';
import {PencilIcon as PencilIconBase, TrashIcon as TrashIconBase} from '@heroicons/react/24/outline';

export const StyledLink = styled.div`
    display: flex;
    height: 3rem;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["green-300"]};
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${(props) => props.theme["green-500"]};
    }

    &:focus-visible {
        outline: 2px solid ${(props) => props.theme["green-300"]};
        outline-offset: 2px;
    }

    @media (min-width: 768px) {
        font-size: 1rem;
    }

    &.md\\:block {
        display: none;
    }
`;

export const PencilIcon = styled(PencilIconBase)`
    width: 1.25rem;
`;

export const TrashButton = styled.button`
    display: flex;
    height: 3rem;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["red-500"]};
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${(props) => props.theme["red-700"]};
    }

    &:focus-visible {
        outline: 2px solid ${(props) => props.theme["red-500"]};
        outline-offset: 2px;
    }

    @media (min-width: 768px) {
        font-size: 1rem;
    }

    &.md\\:block {
        display: none;
    }
`;


export const TrashIcon = styled(TrashIconBase)`
    width: 1.25rem;
`;