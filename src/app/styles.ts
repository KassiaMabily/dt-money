'use client'

import { mixins } from "@/styles/mixins";
import Image from "next/image";
import Link from 'next/link';
import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    max-height: 100vh;
    height: 100vh;
    flex-direction: column;
    padding: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: flex-end;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 1rem;

  @media (min-width: 768px) {
    height: 13rem;
  }
`;

export const ContentWrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;

    @media (min-width: 768px) {
      flex-direction: row;
    }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 1.5rem;
  height: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 40%;
    padding: 5rem;
    text-align: start;
  }
`;

export const Text = styled.p`
  ${mixins.fonts.titleXL}

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: normal;
  }

  a {
    color: ${(props) => props.theme["green-300"]};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: center;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["green-300"]};
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme["green-500"]};
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    align-self: flex-start;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;

    @media (min-width: 768px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const HeroSection = styled.div`
  display: none;


  @media (min-width: 768px) {
    width: 60%;
    padding: 3rem 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }
`;

export const HeroImage = styled(Image)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    min-height: 100%;
    width: auto;
  }
`;
