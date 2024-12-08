'use client'
import styled, {createGlobalStyle} from 'styled-components'
import Image from "next/image";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
        background-color: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['gray-100']} !important;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

    button, input, input[type="submit"], input[type="reset"] {
        background: none;
        color: inherit;
        border: none !important;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`

export const UserPhoto = styled(Image)`
    border-radius: 9999px;
    width: 32px;
    height: 32px;
`;

export const MobileContainer = styled.div`
    display: block;

    @media (min-width: 768px) {
        display: none;
    }
`;
