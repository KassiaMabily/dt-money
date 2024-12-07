import Link from 'next/link';
import {PencilIcon, StyledLink, TrashButton, TrashIcon} from './styles';

export function CreateInvoice() {
    return (
        <Link href="/dashboard/invoices/create" passHref>
            <StyledLink>
                <span className="hidden md:block">Create</span>
            </StyledLink>
        </Link>
    );
}

export function UpdateInvoice({id}: { id: string }) {
    return (
        <Link href={`/dashboard/invoices/${id}/edit`} passHref>
            <StyledLink>
                <PencilIcon/>
            </StyledLink>
        </Link>
    );
}

export function DeleteInvoice({id}: { id: string }) {
    return (
        <TrashButton>
            <TrashIcon/>
        </TrashButton>
    );
}