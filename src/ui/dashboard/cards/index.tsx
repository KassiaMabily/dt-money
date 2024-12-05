"use client"

import { BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'styled-components';
import { CardContainer, CardHeader, CardTitle, CardValue, VariantCard } from './styles';

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};

type IconType = keyof typeof iconMap;



interface CardProps {
    title: string;
    value: number | string;
    type: IconType;
    variant?: VariantCard;
    iconColor?: "red" | "green" | "default";
}

export default function Card({ title, value, type, variant = "default", iconColor = "default" }: CardProps) {
    const theme = useTheme();
    const iconColors = {
        red: theme["red-300"],
        green: theme["green-300"],
        default: theme["gray-100"],
    }

    const IconComponent = iconMap[type];
    return (
        <CardContainer $variant={variant}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>

                {IconComponent ? (
                    <IconComponent
                        style={{
                            width: "1.25rem",
                            height: "1.25rem",
                            color: iconColors[iconColor]
                        }}
                    />
                ) : null}
            </CardHeader>

            <CardValue>{value}</CardValue>
        </CardContainer>
    );
}
