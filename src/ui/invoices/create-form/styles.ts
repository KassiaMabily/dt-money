"use client"
import styled from 'styled-components';
import {CurrencyDollarIcon, UserCircleIcon,} from '@heroicons/react/24/outline';
import {Button} from '@/ui/button';

export const FormContainer = styled.div`
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

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const RadioContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const RadioInput = styled.input`
    cursor: pointer;
`;

export const IconButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
