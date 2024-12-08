"use client"

import styled from "styled-components";

export const LoginBox = styled.div`
    flex: 1;
    border-radius: 0.5rem; 
    background-color: ${(props) => props.theme["gray-900"]}; 
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    
    & > * + * {
        margin-top: 1rem; /* 1 rem = 16px */
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem; 
`;

export const ErrorContainer = styled.div`
    display: flex;
    height: 2rem; 
    align-items: flex-end; 
    gap: 0.25rem; 
`;