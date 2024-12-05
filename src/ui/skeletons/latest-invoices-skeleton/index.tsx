import {
    SkeletonFooter,
    SkeletonFooterIcon,
    SkeletonFooterText,
    SkeletonHeader,
    SkeletonMainContainer,
    SkeletonMainContent
} from "@/ui/skeletons/styles";
import {LatestInvoicesSkeletonGrid} from "@/ui/skeletons/latest-invoices-skeleton/styles";
import {InvoiceSkeleton} from "@/ui/skeletons/invoice-skeleton";

export function LatestInvoicesSkeleton() {
    return (
        <SkeletonMainContainer>
            <SkeletonHeader/>
            <SkeletonMainContent>
                <LatestInvoicesSkeletonGrid>
                    <InvoiceSkeleton/>
                    <InvoiceSkeleton/>
                    <InvoiceSkeleton/>
                    <InvoiceSkeleton/>
                </LatestInvoicesSkeletonGrid>
                <SkeletonFooter>
                    <SkeletonFooterIcon/>
                    <SkeletonFooterText/>
                </SkeletonFooter>
            </SkeletonMainContent>
        </SkeletonMainContainer>
    );
}