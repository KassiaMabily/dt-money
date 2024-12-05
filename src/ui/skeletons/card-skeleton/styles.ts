"use client"

import styled from "styled-components";
import {ShimmerEffect} from "@/ui/skeletons/styles";

export const CardSkeletonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["gray-600"]};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const CardSkeletonHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-100']};
`;

export const CardSkeletonContent = styled(ShimmerEffect)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    padding: 2rem 1rem;
    margin-top: 1rem;
`;