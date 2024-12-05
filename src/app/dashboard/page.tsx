import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "@/lib/data";
import Card from "@/ui/dashboard/cards";
import LatestInvoices from "@/ui/dashboard/latest-invoices";
import RevenueChart from "@/ui/dashboard/revenue-chart";
import { Container, GridContainer, GridContainerLarge, Title } from "./page-styles";

type Params = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page({ searchParams }: { searchParams: Params }) {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();


    return (
        <Container>
            <Title>Dashboard</Title>
            <GridContainer>
                <Card title="Collected" value={totalPaidInvoices} type="collected" variant="green" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" iconColor="red" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" iconColor="green" />
                <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
                />
            </GridContainer>
            <GridContainerLarge>
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices} />
            </GridContainerLarge>
        </Container>
    );
}
