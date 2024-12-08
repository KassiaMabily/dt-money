import {CustomerField, InvoiceForm} from '@/lib/definitions';
import {CheckIcon, ClockIcon,} from '@heroicons/react/24/outline';
import {Button} from '@/components/ui/button';
import {DollarIcon, UserIcon} from "@/components/dashboard/invoices/edit-form/styles";
import {FormContainer, FormContent, FormFooter, FormGroup} from "@/components/ui/form";
import {Label} from "@/components/ui/form/label";
import {InputContainer} from "@/components/ui/form/input/styles";
import {Input} from "@/components/ui/form/input";
import {Select} from "@/components/ui/form/select";
import RadioGroup from "@/components/ui/form/radio-group/card";
import {LabelIcon} from "@/components/dashboard/invoices/create-form/styles";
import {CancelButton} from "@/components/ui/button/styles";
import {State, updateInvoice} from "@/lib/actions";
import {Fragment, useActionState} from "react";
import {AlertError} from "@/components/ui/alert";


export default function EditInvoiceForm({
                                            invoice,
                                            customers,
                                        }: {
    invoice: InvoiceForm;
    customers: CustomerField[];
}) {
    const initialState: State = { message: null, errors: {} };
    const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
    const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

    return (
        <Fragment>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
            {/*   @ts-ignore */}
            <FormContainer action={formAction}>
                <FormContent>
                    {/* Customer Name */}
                    <FormGroup>
                        <Label htmlFor="customer">Choose customer</Label>
                        <Select
                            options={customers.map((customer) => ({
                                label: customer.name,
                                value: customer.id
                            }))}
                            name={"customerId"}
                            placeholder={"Select a customer"}
                            icon={<UserIcon/>}
                            defaultValue={invoice.customer_id}
                            aria-describedby={"customer-error"}
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
                        <InputContainer>
                            <Input
                                id="amount"
                                name="amount"
                                type="number"
                                step="0.01"
                                defaultValue={invoice.amount}
                                placeholder="Enter USD amount"
                                aria-describedby="amount-error"
                            />
                            <DollarIcon/>
                        </InputContainer>

                        <div id="amount-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.amount &&
                                state.errors.amount.map((error: string) => (
                                    <AlertError key={error}>
                                        {error}
                                    </AlertError>
                                ))}
                        </div>
                    </FormGroup>

                    {/* Invoice Status */}
                    <FormGroup>
                        <Label>Invoice Status</Label>
                        <RadioGroup
                            defaultValue={invoice.status}
                            name={"status"}
                            options={[
                                {
                                    label: <LabelIcon><ClockIcon width={18} height={18}/>{" "}Pending</LabelIcon>,
                                    value: "pending",
                                    activeColor: "#fbbf24"
                                },
                                {
                                    label: <LabelIcon><CheckIcon width={18} height={18}/>{" "}Paid</LabelIcon>,
                                    value: "paid",
                                    activeColor: "#10b981"
                                }
                            ]}
                            aria-describedby={"status-error"}
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
                    <Button type="submit">Save</Button>
                </FormFooter>
            </FormContainer>
        </Fragment>
    );
}