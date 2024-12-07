"use client"
import styled from 'styled-components';
import {CurrencyDollarIcon, UserCircleIcon,} from '@heroicons/react/24/outline';


export const LabelIcon = styled.div`
    display: inline-flex;

    & > svg {
        margin-right: 0.5rem;
    }
`;


export const UserIcon = styled(UserCircleIcon)`
    pointer-events: none;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    height: 18px;
    width: 18px;
    transform: translateY(-50%);
    color: ${(props) => props.theme["gray-400"]};
`;

export const DollarIcon = styled(CurrencyDollarIcon)`
    pointer-events: none;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    height: 18px;
    width: 18px;
    transform: translateY(-50%);
    color: ${(props) => props.theme["gray-400"]};


`;