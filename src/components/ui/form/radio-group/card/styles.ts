"use client"

import styled from 'styled-components';

export const RadioGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const HiddenRadioButton = styled.input.attrs<{ $activeColor?: string }>({type: 'radio'})`
    display: none;


    &:checked + label {
        background-color: ${(props) => props?.$activeColor ? props.$activeColor : props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-900"]};
        border: none;

        &:hover {
            color: ${(props) => props?.$activeColor ? props.$activeColor : props.theme["gray-100"]};
        }
    }

    &:not(checked) + label:hover {
        background-color: ${(props) => props.theme["gray-900"]};
    }
`;


export const RadioButtonLabel = styled.label<{ $selected?: boolean, $activeColor?: string }>`
    border: 1px solid ${(props) => props?.$activeColor ? props.$activeColor : props.theme["gray-900"]};;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
    color: ${(props) => props?.$activeColor ? props.$activeColor : props.theme["gray-100"]};
`;