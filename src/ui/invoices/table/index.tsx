import Image from 'next/image';
import {DeleteInvoice, UpdateInvoice} from '@/ui/invoices/buttons';
import InvoiceStatus from '@/ui/invoices/status';
import {formatCurrency, formatDateToLocal} from '@/lib/utils';
import {fetchFilteredInvoices} from '@/lib/data';
import {
    FlexContainer,
    FlexEndContainer,
    MobileInvoiceContainer,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableWrapper
} from "@/ui/invoices/table/styles";
import {InvoiceUserPhoto} from "@/styles/global";


export default async function InvoicesTable({
                                                query,
                                                currentPage,
                                            }: {
    query: string;
    currentPage: number;
}) {
    const invoices = await fetchFilteredInvoices(query, currentPage);

    return (
        <TableContainer>
            <TableWrapper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell as="th" scope="col">Customer</TableCell>
                            <TableCell as="th" scope="col">Email</TableCell>
                            <TableCell as="th" scope="col">Amount</TableCell>
                            <TableCell as="th" scope="col">Date</TableCell>
                            <TableCell as="th" scope="col">Status</TableCell>
                            <TableCell as="th" scope="col" className="relative">
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody className="bg-white">
                    {invoices?.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell>
                                <FlexContainer>
                                    <InvoiceUserPhoto
                                        src={invoice.image_url}
                                        className="rounded-full"
                                        width={28}
                                        height={28}
                                        alt={`${invoice.name}'s profile picture`}
                                    />
                                    <p>{invoice.name}</p>
                                </FlexContainer>
                            </TableCell>
                            <TableCell>{invoice.email}</TableCell>
                            <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                            <TableCell>{formatDateToLocal(invoice.date)}</TableCell>
                            <TableCell>
                                <InvoiceStatus status={invoice.status}/>
                            </TableCell>
                            <TableCell>
                                <FlexEndContainer>
                                    <UpdateInvoice id={invoice.id}/>
                                    <DeleteInvoice id={invoice.id}/>
                                </FlexEndContainer>
                            </TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
                {invoices?.map((invoice) => (
                    <MobileInvoiceContainer key={invoice.id}>
                        <FlexContainer>
                            <Image
                                src={invoice.image_url}
                                className="rounded-full"
                                width={28}
                                height={28}
                                alt={`${invoice.name}'s profile picture`}
                            />
                            <p>{invoice.name}</p>
                        </FlexContainer>
                        <div>
                            <p>{invoice.email}</p>
                            <p>{formatCurrency(invoice.amount)}</p>
                            <p>{formatDateToLocal(invoice.date)}</p>
                            <InvoiceStatus status={invoice.status}/>
                            <FlexEndContainer>
                                <UpdateInvoice id={invoice.id}/>
                                <DeleteInvoice id={invoice.id}/>
                            </FlexEndContainer>
                        </div>
                    </MobileInvoiceContainer>
                ))}
            </TableWrapper>
        </TableContainer>
    );
}