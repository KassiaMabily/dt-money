"use client"

import Link from 'next/link';
import {FaceFrownIcon} from '@heroicons/react/24/outline';
import styled from 'styled-components';

export default function NotFound() {
    return (
        <NotFoundContainer>
            <StyledFaceFrownIcon/>
            <Title>404 Not Found</Title>
            <Message>Could not find the requested invoice.</Message>
            <StyledLink href="/dashboard/invoices">Go Back</StyledLink>
        </NotFoundContainer>
    );
}

const NotFoundContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const StyledFaceFrownIcon = styled(FaceFrownIcon)`
    width: 2.5rem;
    color: #9ca3af;
`;

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
`;

const Message = styled.p`

`;

const StyledLink = styled(Link)`
    margin-top: 1rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["green-500"]};
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #ffffff;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${(props) => props.theme["green-300"]};
    }
`;