import {SelectContainer, SelectContent} from "@/components/ui/form/select/styles";
import React from "react";

interface SelectOption {
    value: string;
    label: string;
}

// Define a interface para as props do RadioGroup
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    name: string;
    placeholder?: string;
    icon?: React.ReactNode;
}


export function Select({options, name, placeholder, icon, ...props}: SelectProps) {
    return (
        <SelectContainer>
            <SelectContent id={name} name={name} {...props}>
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