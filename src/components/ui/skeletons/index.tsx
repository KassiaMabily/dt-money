import {RevenueChartSkeleton} from './revenue-chart-skeleton';
import {
    DashboardSkeletonGrid,
    DashboardSkeletonMainGrid,
    InvoicesMobileSkeletonContainer,
    InvoicesMobileSkeletonContent,
    InvoicesMobileSkeletonHeader,
    InvoicesMobileSkeletonWrapper,
    InvoicesTableSkeletonBody,
    InvoicesTableSkeletonContainer,
    InvoicesTableSkeletonHeader,
    InvoicesTableSkeletonTable,
    SkeletonHeader,
    SkeletonIcon,
    SkeletonText,
    TableCellSkeleton,
    TableCellSkeletonWrapper,
    TableItemHeaderSkeleton,
    TableRowSkeletonContainer
} from './styles';
import {LatestInvoicesSkeleton} from "@/components/ui/skeletons/latest-invoices-skeleton";
import {CardSkeleton} from "@/components/ui/skeletons/card-skeleton";


export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
        </>
    );
}


export function DashboardSkeleton() {
    return (
        <>
            <SkeletonHeader/>
            <DashboardSkeletonGrid>
                <CardsSkeleton/>
            </DashboardSkeletonGrid>
            <DashboardSkeletonMainGrid>
                <RevenueChartSkeleton/>
                <LatestInvoicesSkeleton/>
            </DashboardSkeletonMainGrid>
        </>
    );
}

export function TableRowSkeleton() {
    return (
        <TableRowSkeletonContainer>
            <TableCellSkeleton>
                <TableCellSkeletonWrapper>
                    <SkeletonIcon/>
                    <SkeletonText/>
                </TableCellSkeletonWrapper>
            </TableCellSkeleton>
            <TableCellSkeleton>
                <SkeletonText/>
            </TableCellSkeleton>
            <TableCellSkeleton>
                <SkeletonText/>
            </TableCellSkeleton>
            <TableCellSkeleton>
                <SkeletonText/>
            </TableCellSkeleton>
            <TableCellSkeleton>
                <SkeletonText/>
            </TableCellSkeleton>
            <TableCellSkeleton>
                <TableCellSkeletonWrapper>
                    <SkeletonIcon/>
                    <SkeletonIcon/>
                </TableCellSkeletonWrapper>
            </TableCellSkeleton>
        </TableRowSkeletonContainer>
    );
}

export function InvoicesMobileSkeleton() {
    return (
        <InvoicesMobileSkeletonContainer>
            <InvoicesMobileSkeletonHeader>
                <TableCellSkeletonWrapper>
                    <SkeletonIcon/>
                    <SkeletonText/>
                </TableCellSkeletonWrapper>
                <SkeletonText/>
            </InvoicesMobileSkeletonHeader>
            <InvoicesMobileSkeletonContent>
                <div>
                    <SkeletonText/>
                    <SkeletonText/>
                </div>
                <div className="flex justify-end gap-2">
                    <SkeletonIcon/>
                    <SkeletonIcon/>
                </div>
            </InvoicesMobileSkeletonContent>
        </InvoicesMobileSkeletonContainer>
    );
}

export function InvoicesTableSkeleton() {
    return (
        <InvoicesTableSkeletonContainer>
            <InvoicesMobileSkeletonWrapper>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
            </InvoicesMobileSkeletonWrapper>
            <InvoicesTableSkeletonTable>
                <InvoicesTableSkeletonHeader>
                    <tr>
                        <TableItemHeaderSkeleton scope="col">
                            Customer
                        </TableItemHeaderSkeleton>
                        <TableItemHeaderSkeleton scope="col">
                            Email
                        </TableItemHeaderSkeleton>
                        <TableItemHeaderSkeleton scope="col">
                            Amount
                        </TableItemHeaderSkeleton>
                        <TableItemHeaderSkeleton scope="col">
                            Date
                        </TableItemHeaderSkeleton>
                        <TableItemHeaderSkeleton scope="col">
                            Status
                        </TableItemHeaderSkeleton>
                        <TableItemHeaderSkeleton scope="col" className="relative">

                        </TableItemHeaderSkeleton>
                    </tr>
                </InvoicesTableSkeletonHeader>
                <InvoicesTableSkeletonBody>
                    <TableRowSkeleton/>
                    <TableRowSkeleton/>
                    <TableRowSkeleton/>
                    <TableRowSkeleton/>
                    <TableRowSkeleton/>
                    <TableRowSkeleton/>
                </InvoicesTableSkeletonBody>
            </InvoicesTableSkeletonTable>
        </InvoicesTableSkeletonContainer>
    );
}
