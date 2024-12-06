import CardWrapper from "@/ui/dashboard/cards";
import LatestInvoices from "@/ui/dashboard/latest-invoices";
import RevenueChart from "@/ui/dashboard/revenue-chart";
import {Container, GridContainer, GridContainerLarge, Title} from "./page-styles";
import {RevenueChartSkeleton} from "@/ui/skeletons/revenue-chart-skeleton";
import {Suspense} from "react";
import {CardsSkeleton} from "@/ui/skeletons";


export default async function Page() {

    return (
        <Container>
            <Title>Dashboard</Title>
            <GridContainer>
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper/>
                </Suspense>
            </GridContainer>
            <GridContainerLarge>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </GridContainerLarge>
        </Container>
    );
}
