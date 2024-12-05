"use client"

import Link from 'next/link';
import styled from 'styled-components';

export const SideNavContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1rem 0.75rem;

  @media (min-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const LogoLink = styled(Link)`
  margin-bottom: 0.5rem;
  display: flex;
  height: 5rem;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 1rem;

  @media (min-width: 768px) {
    height: 10rem;
  }
`;

export const LogoContainer = styled.div`
  width: 8rem;
  color: white;

  @media (min-width: 768px) {
    width: 10rem;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${(props) => props.theme["gray-900"]};
  border-radius: 0.375rem;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 0.5rem;
    padding: 1rem 0.75rem;
  }
`;

export const Spacer = styled.div`
  display: none;
  height: auto;
  width: 100%;
  flex-grow: 1;
  border-radius: 0.375rem;
  // background-color: #f9fafb;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SignOutButton = styled.button`
  display: flex;
  height: 48px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    //background-color: #e0f2fe;
    color: #2563eb;
  }

  @media (min-width: 768px) {
    flex-grow: 0;
    justify-content: flex-start;
    padding: 0.5rem 0.75rem;
  }
`;

export const SignOutText = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SignOutIcon = styled.div`
  width: 1.5rem;
`;
