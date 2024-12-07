import {CustomerField} from '@/lib/definitions';
import {DollarIcon, FormContainer, FormFooter, FormGroup, LabelIcon, UserIcon} from './styles';
import RadioGroup from "@/components/ui/form/radio-group/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";
import {Select} from "src/components/ui/form/select";
import {Label} from "@/components/ui/form/label";
import {Input} from "@/components/ui/form/input";
import {createInvoice} from "@/lib/actions";

export default function Form({customers}: { customers: CustomerField[] }) {
    
    return (
        // @ts-ignore
        <form action={createInvoice}>
            <FormContainer>
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

            </FormContainer>

            <FormFooter>
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Invoice</Button>
            </FormFooter>

        </form>
    );
}