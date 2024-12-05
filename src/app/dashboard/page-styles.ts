"use client"

import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridContainerLarge = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;
