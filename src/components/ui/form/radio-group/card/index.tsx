import {HiddenRadioButton, RadioButtonLabel, RadioGroupWrapper} from "@/components/ui/form/radio-group/card/styles";
import React, {Fragment} from "react";

interface RadioOption {
    value: string;
    label: string | React.ReactNode;
}

// Define a interface para as props do RadioGroup
interface RadioGroupProps {
    options: RadioOption[];
    name: string;
}


export default function RadioGroup({options, name}: RadioGroupProps) {

    return (
        <RadioGroupWrapper>
            {options.map(option => (
                <Fragment key={option.value}>
                    <HiddenRadioButton
                        id={option.value}
                        name={name}
                        value={option.value}
                    />
                    <RadioButtonLabel
                        htmlFor={option.value}
                    >
                        {option.label}
                    </RadioButtonLabel>
                </Fragment>
            ))}
        </RadioGroupWrapper>
    )
}
