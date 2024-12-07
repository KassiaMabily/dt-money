import {
    InvoiceSkeletonContainer,
    InvoiceSkeletonDetails,
    InvoiceSkeletonEmail,
    InvoiceSkeletonIcon,
    InvoiceSkeletonName,
    InvoiceSkeletonTextContainer
} from "./styles";

export function InvoiceSkeleton() {
    return (
        <InvoiceSkeletonContainer>
            <InvoiceSkeletonDetails>
                <InvoiceSkeletonIcon/>
                <InvoiceSkeletonTextContainer>
                    <InvoiceSkeletonName/>
                    <InvoiceSkeletonEmail/>
                </InvoiceSkeletonTextContainer>
            </InvoiceSkeletonDetails>
            <InvoiceSkeletonEmail/>
        </InvoiceSkeletonContainer>
    );
}