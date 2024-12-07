import {SelectContainer, SelectContent} from "@/components/ui/form/select/styles";
import React from "react";

interface SelectOption {
    value: string;
    label: string;
}

// Define a interface para as props do RadioGroup
interface SelectProps {
    options: SelectOption[];
    name: string;
    placeholder?: string;
    icon?: React.ReactNode;
}


export function Select({options, name, placeholder, icon}: SelectProps) {
    return (
        <SelectContainer>
            <SelectContent id={name} name={name} defaultValue="">
                <option value="" disabled>
                    {placeholder ? placeholder : "Select an option"}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectContent>
            {icon}
        </SelectContainer>
    )
}