"use client"

import styled from 'styled-components';

export type VariantCard = "green" | "default";

interface CardContainerProps {
    $variant: VariantCard;
}

export const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.$variant == "green" ? props.theme["green-300"] : props.theme["gray-600"]};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-100']};
`;

export const CardTitle = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
`;

export const CardValue = styled.p`
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 700;
`;
