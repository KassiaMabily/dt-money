import {HiddenRadioButton, RadioButtonLabel, RadioGroupWrapper} from "@/components/ui/form/radio-group/card/styles";
import React, {Fragment} from "react";

interface RadioOption {
    value: string;
    label: string | React.ReactNode;
    activeColor?: string
}

// Define a interface para as props do RadioGroup
interface RadioGroupProps {
    options: RadioOption[];
    name: string;
    defaultValue?: string;
}


export default function RadioGroup({options, name, defaultValue}: RadioGroupProps) {

    return (
        <RadioGroupWrapper>
            {options.map(option => (
                <Fragment key={option.value}>
                    <HiddenRadioButton
                        id={option.value}
                        name={name}
                        value={option.value}
                        defaultChecked={defaultValue === option.value}
                        $activeColor={option.activeColor}
                    />
                    <RadioButtonLabel
                        htmlFor={option.value}
                        $activeColor={option.activeColor}
                    >
                        {option.label}
                    </RadioButtonLabel>
                </Fragment>
            ))}
        </RadioGroupWrapper>
    )
}
