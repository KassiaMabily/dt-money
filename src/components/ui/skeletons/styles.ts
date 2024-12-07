"use client"

import styled, {keyframes} from 'styled-components';

const shimmer = keyframes`
    0% {
        background-position: -100vw 0;
    }
    100% {
        background-position: 100vw 0;
    }
`;

export const ShimmerEffect = styled.div`
    animation: ${shimmer} 2s infinite linear;
    background: linear-gradient(to right, ${(props) => props.theme["gray-800"]} 0%, ${(props) => props.theme["gray-700"]} 50%, ${(props) => props.theme["gray-800"]} 100%);
    background-size: 2000px 100%;
    border-radius: 1rem;
`;


export const SkeletonIcon = styled(ShimmerEffect)`
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-500"]};
`;

export const SkeletonText = styled(ShimmerEffect)`
    height: 1.5rem;
    width: 4rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-500"]};
    font-size: 0.875rem;
    font-weight: 500;
`;


export const SkeletonValue = styled(ShimmerEffect)`
    height: 1.75rem;
    width: 5rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-500"]};
`;

export const TableItemHeaderSkeleton = styled.th`
    padding-left: 1rem; /* px-4 */
    padding-right: 1rem; /* px-4 */
    padding-top: 1.25rem; /* py-5 */
    padding-bottom: 1.25rem; /* py-5 */
    font-weight: 500; /* font-medium */

    @media (min-width: 640px) {
        /* sm:pl-6 */
        padding-left: 1.5rem; /* 6 * 0.25rem */
    }

    &.relative {
        position: relative;
        padding-left: 0.75rem; /* pl-3 */
        padding-right: 1.5rem; /* pr-6 */
        padding-top: 0.5rem; /* pt-2 */
        padding-bottom: 1rem; /* pb-4 */

        @media (min-width: 640px) {
            /* sm:pr-6 */
            padding-right: 1.5rem; /* 6 * 0.25rem */
        }
    }
`;

export const TableRowSkeletonContainer = styled.tr`
    width: 100%;
    border-bottom: 1px solid #f3f4f6;

    &:last-of-type {
        border: none;
    }

    &:first-child > td:first-child {
        border-top-left-radius: 0.75rem;
    }

    &:first-child > td:last-child {
        border-top-right-radius: 0.75rem;
    }

    &:last-child > td:first-child {
        border-bottom-left-radius: 0.75rem;
    }

    &:last-child > td:last-child {
        border-bottom-right-radius: 0.75rem;
    }
`;

export const TableCellSkeleton = styled.td`
    padding: 1rem;
    background-color: ${(props) => props.theme["gray-700"]};
`;

export const TableCellSkeletonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const InvoicesMobileSkeletonWrapper = styled.div`
    display: block;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const InvoicesMobileSkeletonContainer = styled.div`
    margin-bottom: 0.5rem;
    width: 100%;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-600"]};
    padding: 1rem;
`;

export const InvoicesMobileSkeletonHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme["gray-800"]};
    padding-bottom: 2rem;
`;

export const InvoicesMobileSkeletonContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
`;

export const InvoicesTableSkeletonContainer = styled.div`
    margin-top: 1.5rem;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["gray-600"]};


    @media (min-width: 768px) {
        padding-top: 0;
    }
`;

export const InvoicesTableSkeletonTable = styled.table`
    display: none;
    width: 100%;
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;

    @media (min-width: 768px) {
        display: table;
    }
`;

export const InvoicesTableSkeletonHeader = styled.thead`
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 1rem;
`;

export const InvoicesTableSkeletonBody = styled.tbody`
    background-color: ${(props) => props.theme["gray-700"]};
    padding-top: 1rem;
`;

export const DashboardSkeletonGrid = styled.div`
    display: grid;
    gap: 1.5rem;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const DashboardSkeletonMainGrid = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(8, 1fr);
    }
`;


export const SkeletonMainContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;

    @media (min-width: 768px) {
        grid-column: span 4;
    }
`;

export const SkeletonMainContent = styled.div`
    border-radius: 0.75rem;
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 1rem;
`;


export const SkeletonHeader = styled(ShimmerEffect)`
    margin-bottom: 1rem;
    height: 2rem;
    width: 9rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["gray-400"]};
`;

export const SkeletonFooter = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    padding-top: 1.5rem;
`;

export const SkeletonFooterIcon = styled(ShimmerEffect)`
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 9999px;
`;

export const SkeletonFooterText = styled(ShimmerEffect)`
    margin-left: 0.5rem;
    height: 1rem;
    width: 5rem;
    border-radius: 0.375rem;
`;
