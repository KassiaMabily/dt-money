"use client"

import styled from 'styled-components';
import {ArrowLeftIcon as ArrowLeftIconBase, ArrowRightIcon as ArrowRightIconBase} from '@heroicons/react/24/outline';

export const PaginationContainer = styled.div`
    display: inline-flex;
`;

export const PaginationNumberContainer = styled.div<{ $isActive: boolean; $position?: string }>`
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    border: 1px solid;
    border-radius: ${({$position}) =>
            $position === 'first' || $position === 'single'
                    ? '0.375rem 0 0 0.375rem'
                    : $position === 'last' || $position === 'single'
                            ? '0 0.375rem 0.375rem 0'
                            : '0'};
    background-color: ${({theme, $isActive}) => ($isActive ? theme["green-300"] : 'transparent')};
    border-color: ${({theme, $isActive}) => ($isActive ? theme["green-300"] : theme["gray-500"])};
    color: ${({theme, $isActive}) => ($isActive ? theme["gray-100"] : theme["gray-500"])};

    &:hover {
        background-color: ${({
                                 theme,
                                 $isActive,
                                 $position
                             }) => (!$isActive && $position !== 'middle' ? theme["gray-100"] : 'inherit')};
    }
`;

export const PaginationArrowContainer = styled.div<{ $isDisabled?: boolean; $direction: 'left' | 'right' }>`
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border: 1px solid;
    border-color: ${(props) => props.theme["gray-500"]};
    color: ${({theme, $isDisabled}) => ($isDisabled ? theme["green-100"] : theme["gray-500"])};
    pointer-events: ${({$isDisabled}) => ($isDisabled ? 'none' : 'auto')};

    &:hover {
        background-color: ${({theme, $isDisabled}) => (!$isDisabled ? theme["gray-100"] : 'inherit')};
    }

    margin-right: ${({$direction}) => ($direction === 'left' ? '0.5rem' : '0')};
    margin-left: ${({$direction}) => ($direction === 'right' ? '0.5rem' : '0')};
`;

export const PaginationContent = styled.div`
    display: flex;
    margin-right: -1px;
`;

export const ArrowLeftIcon = styled(ArrowLeftIconBase)`
    width: 1rem;
`;

export const ArrowRightIcon = styled(ArrowRightIconBase)`
    width: 1rem;
`;
