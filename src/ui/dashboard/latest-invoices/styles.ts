"use client"

import { ArrowPathIcon as ArrowPathIconBase } from '@heroicons/react/24/outline';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InvoicesContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
`;

export const InvoiceList = styled.div`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

export const InvoiceItem = styled.div<{ $isFirst: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: ${({ $isFirst, theme }) => ($isFirst ? 'none' : `1px solid ${theme['gray-700']}`)};
`;

export const InvoiceUserPhoto = styled(Image)`
  margin-right: 1rem;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
`;

export const InvoiceDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const InvoiceImage = styled.img`
  margin-right: 1rem;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
`;

export const InvoiceTextContainer = styled.div`
  min-width: 0;
`;

export const InvoiceName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme['green-300']};

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const InvoiceEmail = styled.p`
  display: none;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-400']};

  @media (min-width: 640px) {
    display: block;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
`;

export const ArrowPathIcon = styled(ArrowPathIconBase)`
  height: 1.25rem;
  width: 1.25rem;
  color: ${(props) => props.theme["gray-500"]};
`;

export const UpdatedText = styled.h3`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-500"]};
`;
