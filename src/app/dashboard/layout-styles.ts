"use client"
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
  }
`;

export const SideNavWrapper = styled.div`
  width: 100%;
  flex: none;

  @media (min-width: 768px) {
    width: 16rem;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 1.5rem;

  @media (min-width: 768px) {
    overflow-y: auto;
    padding: 3rem;
  }
`;
