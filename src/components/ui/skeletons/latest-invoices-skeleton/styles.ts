"use client"
import styled from "styled-components";

export const LatestInvoicesSkeletonGrid = styled.div`

    height: 410px;


    gap: 0.5rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-600"]};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    width: 100%;


    //display: grid;
    //grid-template-columns: repeat(12, 1fr);
    //align-items: end;
    //gap: 0.5rem;

    @media (min-width: 768px) {
        //gap: 1rem;
        grid-column: span 4;
    }
`;