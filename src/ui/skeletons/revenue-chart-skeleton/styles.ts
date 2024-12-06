"use client"

import styled from 'styled-components';
import {ShimmerEffect} from '../styles';


export const RevenueChartSkeletonGrid = styled(ShimmerEffect)`
    display: grid;
    height: 410px;
    grid-template-columns: repeat(12, 1fr);
    align-items: end;
    gap: 0.5rem;
    border-radius: 0.375rem;
        //background-color: ${(props) => props.theme["gray-600"]};
    padding: 1rem;

    @media (min-width: 768px) {
        gap: 1rem;
    }
`;
