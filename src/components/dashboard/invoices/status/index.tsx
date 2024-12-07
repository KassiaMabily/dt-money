import {StatusContainer} from "@/components/dashboard/invoices/status/styles";
import type {InvoiceStatus} from "@/lib/definitions";
import {StyledIcon} from "@/components/ui/icon";
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";

export default function InvoiceStatus({status}: { status: InvoiceStatus }) {
    return (
        <StatusContainer $status={status}>
            {status === 'pending' ? (
                <>
                    Pending
                    <StyledIcon>
                        <ClockIcon/>
                    </StyledIcon>
                </>
            ) : null}
            {status === 'paid' ? (
                <>
                    Paid
                    <StyledIcon>
                        <CheckIcon/>
                    </StyledIcon>
                </>
            ) : null}
        </StatusContainer>
    );
}