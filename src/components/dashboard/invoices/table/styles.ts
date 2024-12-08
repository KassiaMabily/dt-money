"use client"
import styled from "styled-components";



export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const FlexEndContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
`;

export const MobileInvoiceContainer = styled.div`
    margin-bottom: 0.5rem;
    width: 100%;
    background-color: ${(props) => props.theme["gray-600"]};
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme["gray-800"]};

    @media (min-width: 768px) {
        display: none;
    }
`;