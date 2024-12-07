import {LabelContainer} from "@/components/ui/form/label/styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
}

export function Label({children, ...props}: LabelProps) {
    return <LabelContainer {...props}>{children}</LabelContainer>;
}