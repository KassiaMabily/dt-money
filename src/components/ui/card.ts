"use client";

import styled from "styled-components";

export const Card = styled.div`
    margin-bottom: 0.5rem; 
    width: 100%;
    border-radius: 0.375rem; 
    background-color: ${(props) => props.theme["gray-700"]}; 
    padding: 1rem;

   
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme["gray-800"]}; 
    padding-bottom: 1rem; 
`;

export const CardSummary = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme["gray-800"]}; 
    padding: 1.25rem 0; 
`;

export const CardSummaryItem = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
`;

export const CardSummaryLabel = styled.p`
    font-size: 0.75rem; 
`;

export const CardSummaryValue = styled.p`
    font-weight: 500; 
`;

export const CardFooter = styled.div`
    padding-top: 1rem; 
    font-size: 0.875rem;
`;