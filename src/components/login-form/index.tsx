'use client';

import {
    AtSymbolIcon, ExclamationCircleIcon,
    KeyIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {Button} from "@/components/ui/button";
import {FormContainer, FormContent, FormGroup} from "@/components/ui/form";
import {Label} from "@/components/ui/form/label";
import {Input} from "@/components/ui/form/input";
import {StyledIcon} from "@/components/ui/icon";
import {ErrorContainer, LoginBox, Title} from "@/components/login-form/styles";
import { useActionState} from 'react';
import { authenticate } from '@/lib/actions';
import {AlertError} from "@/components/ui/alert";


export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <FormContainer action={formAction}>
            <LoginBox className={"space-y-4"}>
                <Title>
                    Please log in to continue.
                </Title>
                <FormContent>
                    <FormGroup>
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            icon={<AtSymbolIcon/>}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label
                            htmlFor="password"
                        >
                            Password
                        </Label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={6}
                            icon={<KeyIcon/>}
                        />
                    </FormGroup>
                </FormContent>
                <Button aria-disabled={isPending}>
                    <span>
                        Log in <StyledIcon><ArrowRightIcon /></StyledIcon>
                    </span>
                </Button>
                <ErrorContainer>
                    {errorMessage && (
                        <AlertError>
                            <StyledIcon>
                                <ExclamationCircleIcon/>
                            </StyledIcon>

                            <p>{errorMessage}</p>
                        </AlertError>
                    )}
                </ErrorContainer>
            </LoginBox>
        </FormContainer>
    );
}
