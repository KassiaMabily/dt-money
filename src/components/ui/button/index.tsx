import {StyledButton} from "@/components/ui/button/styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({children, className, ...rest}: ButtonProps) {
    return (
        <StyledButton {...rest} className={className}>
            {children}
        </StyledButton>
    );
}