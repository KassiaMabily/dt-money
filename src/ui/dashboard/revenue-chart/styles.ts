"use client"

import { CalendarIcon as CalendarIconBase } from '@heroicons/react/24/outline';
import styled from 'styled-components';

export const Container = styled.div`

  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;

export const RecentRevenueTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const NoDataMessage = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-400']};
`;

export const ChartContainer = styled.div`
  border-radius: 1rem;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: none;
  padding: 1rem;
  align-items: end;
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(13, 1fr);
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;


interface YAxisLabelsProps {
  height: number;
}
export const YAxisLabels = styled.div<YAxisLabelsProps>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  color: ${(props) => props.theme['green-300']};
  font-size: 0.875rem;
  height: ${(props) => props.height}px;

  @media (min-width: 640px) {
    display: flex;
  }
`;
YAxisLabels.defaultProps = { height: 350 };

export const RevenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
`;

export const RevenueBar = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme["green-300"]};
`;


export const MonthLabel = styled.p`
  transform: rotate(-90deg);
  color: ${(props) => props.theme["green-300"]};
  font-size: 0.875rem;

  @media (min-width: 640px) {
    transform: rotate(0);
  }
`;


export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
`;

export const CalendarIcon = styled(CalendarIconBase)`
  height: 1.25rem;
  width: 1.25rem;
  color: ${(props) => props.theme["gray-500"]};
`;

export const Last12MonthsText = styled.h3`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-500"]};
`;
