"use client"
import styled from "styled-components";
import {InvoiceStatus} from "@/lib/definitions";
import {InvoiceStatusColors} from "@/lib/constants";

export const StatusContainer = styled.span<{ $status: InvoiceStatus }>`
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    background-color: ${({$status}) => InvoiceStatusColors[$status].background};
    color: ${({$status}) => InvoiceStatusColors[$status].foreground};
`;
