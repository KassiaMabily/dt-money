'use client'
import styled from "styled-components";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-shrink: 0;
`;


export const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon)`
    position: absolute;
    left: 0.75rem;
    top: 50%;
    height: 18px;
    width: 18px;
    transform: translateY(-50%);
    color: ${(props) => props.theme["gray-400"]};

    .peer:focus & {
        color: ${(props) => props.theme["gray-500"]};
    }
`;