"use client"
import styled from "styled-components";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";

export const StatusContainer = styled.span<{ $status: string }>`
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    background-color: ${({$status}) =>
            $status === 'pending' ? '#f3f4f6' : '#10b981'};
    color: ${({$status}) => ($status === 'pending' ? '#6b7280' : '#ffffff')};
`;

export const StyledClockIcon = styled(ClockIcon)`
    margin-left: 0.25rem;
    width: 1rem;
    color: #6b7280;
`;

export const StyledCheckIcon = styled(CheckIcon)`
    margin-left: 0.25rem;
    width: 1rem;
    color: #ffffff;
`;