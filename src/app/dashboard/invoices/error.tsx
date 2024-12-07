'use client';

import {useEffect} from 'react';
import styled from "styled-components";
import {Button} from "@/components/ui/button";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <ErrorContainer>
            <ErrorMessage>Something went wrong!</ErrorMessage>
            <Button onClick={() => reset()}>Try again</Button>
        </ErrorContainer>
    );
}

const ErrorContainer = styled.section`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ErrorMessage = styled.h2`
    text-align: center;
`;