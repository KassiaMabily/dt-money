import styled from "styled-components";
import {CurrencyDollarIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export const Form = styled.form`
    background-color: #f9fafb;
    padding: 1rem;
    border-radius: 0.375rem;

    @media (min-width: 768px) {
        padding: 1.5rem;
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
`;

export const SelectContainer = styled.div`
    position: relative;
`;

export const Select = styled.select`
    display: block;
    width: 100%;
    cursor: pointer;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
    padding: 0.5rem 0.625rem 0.5rem 2.5rem;
    font-size: 0.875rem;
    outline: 2px solid transparent;
    placeholder-color: #6b7280;
`;

export const UserIcon = styled(UserCircleIcon)`
    pointer-events: none;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    height: 18px;
    width: 18px;
    transform: translateY(-50%);
    color: #6b7280;
`;

export const InputContainer = styled.div`
    margin-top: 0.5rem;
    border-radius: 0.375rem;
    position: relative;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
    padding: 0.5rem 0.625rem 0.5rem 2.5rem;
    font-size: 0.875rem;
    outline: 2px solid transparent;
    placeholder-color: #6b7280;
`;

export const DollarIcon = styled(CurrencyDollarIcon)`
    pointer-events: none;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    height: 18px;
    width: 18px;
    transform: translateY(-50%);
    color: #6b7280;

    &:focus {
        color: #1f2937;
    }
`;

export const Fieldset = styled.fieldset`
    margin-top: 1rem;
`;

export const Legend = styled.legend`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
`;

export const RadioContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const RadioLabel = styled.label<{ checked: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    cursor: pointer;
    padding: 0.375rem;
    border-radius: 9999px;
    background-color: ${({checked}) => (checked ? '#10b981' : '#f3f4f6')};
    color: ${({checked}) => (checked ? '#ffffff' : '#6b7280')};
`;

export const RadioInput = styled.input`
    cursor: pointer;
`;

export const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export const CancelButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-radius: 0.375rem;
    background-color: #f3f4f6;
    padding: 0 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e5e7eb;
    }
`;