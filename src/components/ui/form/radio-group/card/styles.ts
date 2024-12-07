"use client"

import styled from 'styled-components';

export const RadioGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const HiddenRadioButton = styled.input.attrs({type: 'radio'})`
    display: none;

    &:checked + label {
        background-color: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-100"]};

        &:hover {
            background-color: ${(props) => props.theme["gray-800"]};
        }
    }

    &:not(checked) + label:hover {
        background-color: ${(props) => props.theme["gray-800"]};
    }
`;


export const RadioButtonLabel = styled.label<{ $selected?: boolean }>`
    border: 1px solid ${(props) => props.theme["gray-900"]};
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
`;