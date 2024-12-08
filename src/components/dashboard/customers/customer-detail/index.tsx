"use client"

import styled from "styled-components";
import {UserPhoto} from "@/styles/global";

const CustomerDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.75rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

const CustomerDetailContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem; 
`;

const CustomerName = styled.p`
    font-weight: 600;
`;

const CustomerEmail = styled.p`
    font-size: 0.875rem; 
    color: #6b7280; 
`;


export function CustomerDetail({ customer } : { customer: { image_url: string, name: string, email: string } }) {
    return (
        <CustomerDetailContainer>
            <CustomerDetailContent>
                <UserPhoto
                    src={customer.image_url}
                    alt={`${customer.name}'s profile picture`}
                    width={28}
                    height={28}
                />
                <CustomerName>{customer.name}</CustomerName>
            </CustomerDetailContent>
            <CustomerEmail>{customer.email}</CustomerEmail>
        </CustomerDetailContainer>
    )
}