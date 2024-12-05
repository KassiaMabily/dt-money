"use client"

import styled, { css } from 'styled-components';

interface NavLinkProps {
  $active: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  position: relative;
  display: flex;
  height: 48px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
  color: ${(props) => props.$active ? props.theme['green-300'] : props.theme['gray-100']};

  @media (max-width: 768px) {
    ${(props) =>
    props.$active &&
    css`
      &:after {
        position: absolute;
        content: "";
        display: block;
        width: 70%;
        margin: 1em auto 0;
        border-bottom: 1px solid ${props.theme['green-800']};
        bottom: 1px;
      }
    `}

    &:first-child:focus {
      outline: none;
      border-radius: 0.375rem 0 0 0.375rem;
    }
  }


  &:hover {
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
  }



  @media (min-width: 768px) {
    flex-grow: 0;
    justify-content: flex-start;
    padding: 0.5rem 0.75rem;
    background-color: ${(props) => props.$active ? props.theme['gray-800'] : props.theme['gray-900']};
    border-radius: 0.375rem;
  }
`;

NavLink.defaultProps = {
  $active: false,
}



export const LinkText = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LinkIcon = styled.div`
  width: 1.5rem;
`;
