"use client"

import styled from "styled-components";

export const FormContainer = styled.form`
`;

export const FormContent = styled.div`
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 1rem;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
        padding: 1.5rem;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const FormFooter = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
`;