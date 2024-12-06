import {RevenueChartSkeleton} from './revenue-chart-skeleton';
import {
    DashboardSkeletonGrid,
    DashboardSkeletonMainGrid,
    InvoicesMobileSkeletonContainer,
    InvoicesMobileSkeletonContent,
    InvoicesMobileSkeletonHeader,
    InvoicesTableSkeletonBody,
    InvoicesTableSkeletonContainer,
    InvoicesTableSkeletonHeader,
    InvoicesTableSkeletonTable,
    SkeletonHeader,
    SkeletonIcon,
    SkeletonText,
    TableCellSkeleton,
    TableRowSkeletonContainer
} from './styles';
import {LatestInvoicesSkeleton} from "@/ui/skeletons/latest-invoices-skeleton";
import {CardSkeleton} from "@/ui/skeletons/card-skeleton";


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
                <div className="flex items-center gap-3">
                    <SkeletonIcon/>
                    <SkeletonText/>
                </div>
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
                <div className="flex justify-end gap-3">
                    <SkeletonIcon/>
                    <SkeletonIcon/>
                </div>
            </TableCellSkeleton>
        </TableRowSkeletonContainer>
    );
}

export function InvoicesMobileSkeleton() {
    return (
        <InvoicesMobileSkeletonContainer>
            <InvoicesMobileSkeletonHeader>
                <div className="flex items-center">
                    <SkeletonIcon/>
                    <SkeletonText/>
                </div>
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
            <div className="md:hidden">
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
                <InvoicesMobileSkeleton/>
            </div>
            <InvoicesTableSkeletonTable>
                <InvoicesTableSkeletonHeader>
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Customer
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Amount
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Date
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Status
                        </th>
                        <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
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
