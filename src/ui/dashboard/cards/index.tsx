import {BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon} from '@heroicons/react/24/outline';
import {CardContainer, CardHeader, CardTitle, CardValue, VariantCard} from './styles';
import {fetchCardData} from "@/lib/data";

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

export function Card({title, value, type, variant = "default", iconColor = "default"}: CardProps) {
    const iconColors = {
        red: '#F75A68',
        green: '#00B37E',
        default: '#E1E1E6',
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


export default async function CardWrapper() {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();

    return (
        <>
            <Card title="Collected" value={totalPaidInvoices} type="collected" variant="green"/>
            <Card title="Pending" value={totalPendingInvoices} type="pending" iconColor="red"/>
            <Card title="Total Invoices" value={numberOfInvoices} type="invoices" iconColor="green"/>
            <Card
                title="Total Customers"
                value={numberOfCustomers}
                type="customers"
            />
        </>
    );
}
