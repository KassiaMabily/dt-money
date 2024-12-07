import {CustomerField} from '@/lib/definitions';
import {
    DollarIcon,
    FormContainer,
    FormGroup,
    IconButton,
    Input,
    InputContainer,
    Label,
    RadioContainer,
    RadioInput,
    RadioLabel,
    Select,
    SelectContainer,
    UserIcon
} from './styles';
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";

export default function Form({customers}: { customers: CustomerField[] }) {
    return (
        <form>
            <FormContainer>
                {/* Customer Name */}
                <FormGroup>
                    <Label htmlFor="customer">Choose customer</Label>
                    <SelectContainer>
                        <Select id="customer" name="customerId" defaultValue="">
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
                            placeholder="Enter USD amount"
                        />
                        <DollarIcon/>
                    </InputContainer>
                </FormGroup>

                {/* Invoice Status */}
                <FormGroup>
                    <Label>Invoice Status</Label>
                    <RadioContainer>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="status"
                                value="paid"
                            />
                            <CheckIcon width={18} height={18} color="#10b981"/>
                            Paid
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="status"
                                value="pending"
                            />
                            <ClockIcon width={18} height={18} color="#fbbf24"/>
                            Pending
                        </RadioLabel>
                    </RadioContainer>
                </FormGroup>

                {/* Submit Button */}
                <div>
                    <IconButton type="submit">
                        <CheckIcon width={18} height={18}/>
                        Submit
                    </IconButton>
                </div>
            </FormContainer>
        </form>
    );
}