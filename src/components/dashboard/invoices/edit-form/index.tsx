import {CustomerField, InvoiceForm} from '@/lib/definitions';
import {CheckIcon, ClockIcon,} from '@heroicons/react/24/outline';
import {Button} from '@/components/ui/button';
import {
    ButtonGroup,
    CancelButton,
    DollarIcon,
    Fieldset,
    Form,
    Input,
    InputContainer,
    Label,
    Legend,
    RadioContainer,
    RadioInput,
    RadioLabel,
    Select,
    SelectContainer,
    UserIcon
} from "@/components/dashboard/invoices/edit-form/styles";


export default function EditInvoiceForm({
                                            invoice,
                                            customers,
                                        }: {
    invoice: InvoiceForm;
    customers: CustomerField[];
}) {
    return (
        <Form>
            <div>
                {/* Customer Name */}
                <div className="mb-4">
                    <Label htmlFor="customer">Choose customer</Label>
                    <SelectContainer>
                        <Select id="customer" name="customerId" defaultValue={invoice.customer_id}>
                            <option value="" disabled>
                                Select a customer
                            </option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name}
                                </option>
                            ))}
                        </Select>
                        <UserIcon/>
                    </SelectContainer>
                </div>

                {/* Invoice Amount */}
                <div className="mb-4">
                    <Label htmlFor="amount">Choose an amount</Label>
                    <InputContainer>
                        <Input
                            id="amount"
                            name="amount"
                            type="number"
                            step="0.01"
                            defaultValue={invoice.amount}
                            placeholder="Enter USD amount"
                        />
                        <DollarIcon/>
                    </InputContainer>
                </div>

                {/* Invoice Status */}
                <Fieldset>
                    <Legend>Set the invoice status</Legend>
                    <RadioContainer>
                        <RadioLabel checked={invoice.status === 'pending'}>
                            <RadioInput
                                id="pending"
                                name="status"
                                type="radio"
                                value="pending"
                                defaultChecked={invoice.status === 'pending'}
                            />
                            Pending <ClockIcon className="h-4 w-4"/>
                        </RadioLabel>
                        <RadioLabel checked={invoice.status === 'paid'}>
                            <RadioInput
                                id="paid"
                                name="status"
                                type="radio"
                                value="paid"
                                defaultChecked={invoice.status === 'paid'}
                            />
                            Paid <CheckIcon className="h-4 w-4"/>
                        </RadioLabel>
                    </RadioContainer>
                </Fieldset>
            </div>
            <ButtonGroup>
                <CancelButton href="/dashboard/invoices">
                    Cancel
                </CancelButton>
                <Button type="submit">Save</Button>
            </ButtonGroup>
        </Form>
    );
}