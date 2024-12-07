import {StatusContainer, StyledCheckIcon, StyledClockIcon} from "@/components/dashboard/invoices/status/styles";

export default function InvoiceStatus({status}: { status: string }) {
    return (
        <StatusContainer $status={status}>
            {status === 'pending' ? (
                <>
                    Pending
                    <StyledClockIcon/>
                </>
            ) : null}
            {status === 'paid' ? (
                <>
                    Paid
                    <StyledCheckIcon/>
                </>
            ) : null}
        </StatusContainer>
    );
}