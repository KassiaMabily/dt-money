import {PencilIcon, StyledLink, TrashButton, TrashIcon} from './styles';
import {deleteInvoice} from "@/lib/actions";

export function CreateInvoice() {
    return (
        <StyledLink href="/dashboard/invoices/create" passHref>
            <span className="hidden md:block">Create</span>
        </StyledLink>
    );
}

export function UpdateInvoice({id}: { id: string }) {
    return (
        <StyledLink href={`/dashboard/invoices/${id}/edit`} passHref>
            <PencilIcon/>
        </StyledLink>
    );
}

export function DeleteInvoice({id}: { id: string }) {
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);

    return (
        // @ts-ignore
        <form action={deleteInvoiceWithId}>
            <TrashButton type={"submit"}>
                <TrashIcon/>
            </TrashButton>
        </form>
    );

}