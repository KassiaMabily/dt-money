"use client"

import styled from "styled-components";

export const TableContainer = styled.div`
    margin-top: 1.5rem;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["gray-600"]};
    padding: 0.5rem;

    @media (min-width: 768px) {
        padding-top: 0;
    }
`;

export const TableWrapper = styled.div`
    display: inline-block;
    min-width: 100%;
    vertical-align: middle;
`;

export const Table = styled.table`
    min-width: 100%;
    color: ${(props) => props.theme["gray-200"]};
    display: none;

    @media (min-width: 768px) {
        display: table;
    }
`;


export const TableHead = styled.thead`
    border-radius: 0.5rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: normal;
`;

export const TableHeaderCell = styled.th`
    padding: 1.25rem;
    font-weight: 500;
    @media (min-width: 640px) {
        padding-left: 1.5rem;
    }
`;

export const TableRow = styled.tr`
    width: 100%;
    border-bottom: 1px solid #d1d5db;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 0.875rem;

    &:last-of-type {
        border: none;
    }

    &:first-child > td:first-child {
        border-top-left-radius: 0.5rem;
    }

    &:first-child > td:last-child {
        border-top-right-radius: 0.5rem;
    }

    &:last-child > td:first-child {
        border-bottom-left-radius: 0.5rem;
    }

    &:last-child > td:last-child {
        border-bottom-right-radius: 0.5rem;
    }
`;

export const TableBody = styled.tbody`
    background-color: ${(props) => props.theme["gray-700"]};
`;

export const TableCell = styled.td`
    white-space: nowrap;
    padding: 0.75rem 1rem;

    &:first-child {
        padding-left: 1.5rem;
    }

    &:last-child {
        padding-right: 1.5rem;
    }
`;




