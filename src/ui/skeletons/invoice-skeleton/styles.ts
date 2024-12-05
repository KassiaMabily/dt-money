"use client"

import styled from "styled-components";
import {ShimmerEffect} from "@/ui/skeletons/styles";

export const InvoiceSkeletonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme["gray-800"]};
    padding: 1rem 0;
`;

export const InvoiceSkeletonDetails = styled.div`
    display: flex;
    align-items: center;
`;

export const InvoiceSkeletonIcon = styled(ShimmerEffect)`
    margin-right: 0.5rem;
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
`;

export const InvoiceSkeletonTextContainer = styled.div`
    min-width: 0;
`;

export const InvoiceSkeletonName = styled(ShimmerEffect)`
    height: 1.25rem;
    width: 10rem;
    border-radius: 0.375rem;
`;

export const InvoiceSkeletonEmail = styled(ShimmerEffect)`
    margin-top: 0.5rem;
    height: 1rem;
    width: 3rem;
    border-radius: 0.375rem;
`;
