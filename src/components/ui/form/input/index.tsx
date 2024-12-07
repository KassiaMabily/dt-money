import {InputContainer, InputElement} from "@/components/ui/form/input/styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
}

export function Input({icon, ...props}: InputProps) {
    return (
        <InputContainer>
            <InputElement
                {...props}
            />
            {icon}
        </InputContainer>

    )
}