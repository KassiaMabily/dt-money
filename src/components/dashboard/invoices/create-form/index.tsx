import {CustomerField} from '@/lib/definitions';
import {DollarIcon, LabelIcon, UserIcon} from './styles';
import RadioGroup from "@/components/ui/form/radio-group/card";
import {Button} from "@/components/ui/button";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";
import {Select} from "src/components/ui/form/select";
import {Label} from "@/components/ui/form/label";
import {Input} from "@/components/ui/form/input";
import {FormContainer, FormContent, FormFooter, FormGroup} from "@/components/ui/form";
import {createInvoice} from "@/lib/actions";
import {CancelButton} from "@/components/ui/button/styles";

export default function Form({customers}: { customers: CustomerField[] }) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <FormContainer action={createInvoice}>
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
                    />
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
                    />
                </FormGroup>

                {/* Invoice Status */}
                <FormGroup>
                    <Label>Invoice Status</Label>
                    <RadioGroup
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