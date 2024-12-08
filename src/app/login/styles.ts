"use client"
import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 100vh;
`;

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width: 400px;
    flex-direction: column;
    gap: 10px;
    padding: 16px;

    @media (min-width: 768px) {
        margin-top: -8rem;
    }
`;

export const Header = styled.div`
    display: flex;
    height: 5rem;
    width: 100%;
    align-items: flex-end;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["gray-900"]};
    padding: 12px;

    @media (min-width: 768px) {
        height: 9rem;
    }
`;

export const LogoContainer = styled.div`
    width: 8rem;
    color: ${(props) => props.theme["gray-900"]};

    @media (min-width: 768px) {
        width: 9rem;
    }
`;
