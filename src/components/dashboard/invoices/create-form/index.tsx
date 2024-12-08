'use client';

import {CustomerField} from '@/lib/definitions';
import {DollarIcon, LabelIcon, UserIcon} from './styles';
import RadioGroup from "@/components/ui/form/radio-group/card";
import {Button} from "@/components/ui/button";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";
import {Select} from "src/components/ui/form/select";
import {Label} from "@/components/ui/form/label";
import {Input} from "@/components/ui/form/input";
import {FormContainer, FormContent, FormFooter, FormGroup} from "@/components/ui/form";
import {createInvoice, State } from "@/lib/actions";
import {CancelButton} from "@/components/ui/button/styles";
import { useActionState } from 'react';
import {AlertError} from "@/components/ui/alert";

export default function Form({customers}: { customers: CustomerField[] }) {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createInvoice, initialState);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <FormContainer action={formAction}>
            <FormContent>
                {/* Customer Name */}
                <FormGroup>
                    <Label htmlFor="customerId">Choose a customer</Label>
                    <Select
                        options={customers.map((customer) => ({
                            label: customer.name,
                            value: customer.id
                        }))}
                        name={"customerId"}
                        placeholder={"Select a customer"}
                        icon={<UserIcon/>}
                        aria-describedby="customer-error"
                        defaultValue={""}
                    />
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.customerId &&
                            state.errors.customerId.map((error: string) => (
                                <AlertError key={error}>
                                    {error}
                                </AlertError>
                            ))}
                    </div>
                </FormGroup>

                {/* Invoice Amount */}
                <FormGroup>
                    <Label htmlFor="amount">Choose an amount</Label>

                    <Input
                        id="amount"
                        name="amount"
                        type="number"
                        step="0.01"
                        placeholder="Enter USD amount"
                        icon={<DollarIcon/>}
                        aria-describedby="amount-error"
                    />

                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                                <AlertError key={error}>
                                    {error}
                                </AlertError>
                            ))}
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label>Invoice Status</Label>
                    <RadioGroup
                        aria-describedby="status-error"
                        name={"status"}
                        options={[
                            {
                                label: <LabelIcon><ClockIcon width={18} height={18}
                                                             color="#fbbf24"/>{" "}Pending</LabelIcon>,
                                value: "pending"
                            },
                            {
                                label: <LabelIcon><CheckIcon width={18} height={18}
                                                             color="#10b981"/>{" "}Paid</LabelIcon>,
                                value: "paid"
                            }
                        ]}
                    />

                    <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.status &&
                            state.errors.status.map((error: string) => (
                                <AlertError key={error}>
                                    {error}
                                </AlertError>
                            ))}
                    </div>
                </FormGroup>

            </FormContent>

            <FormFooter>
                <CancelButton href="/dashboard/invoices">
                    Cancel
                </CancelButton>
                <Button type="submit">Create Invoice</Button>
            </FormFooter>

        </FormContainer>
    );
}