import CardWrapper from "@/components/dashboard/cards";
import LatestInvoices from "@/components/dashboard/latest-invoices";
import RevenueChart from "@/components/dashboard/revenue-chart";
import {Container, GridContainer, GridContainerLarge, Title} from "./page-styles";
import {RevenueChartSkeleton} from "@/components/ui/skeletons/revenue-chart-skeleton";
import {Suspense} from "react";
import {CardsSkeleton} from "@/components/ui/skeletons";


export default async function Page() {

    return (
        <Container>
            <Title>Dashboard</Title>
            <GridContainer>
                <Suspense fallback={<CardsSkeleton/>}>
                    {/* @ts-expect-error Server Component */}
                    <CardWrapper/>
                </Suspense>
            </GridContainer>
            <GridContainerLarge>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    {/* @ts-expect-error Server Component */}
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    {/* @ts-expect-error Server Component */}
                    <LatestInvoices/>
                </Suspense>
            </GridContainerLarge>
        </Container>
    );
}
