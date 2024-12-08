
import {DeleteInvoice, UpdateInvoice} from '@/components/dashboard/invoices/buttons';
import InvoiceStatus from '@/components/dashboard/invoices/status';
import {formatCurrency, formatDateToLocal} from '@/lib/utils';
import {fetchFilteredInvoices} from '@/lib/data';
import {
    FlexEndContainer
} from "@/components/dashboard/invoices/table/styles";
import {MobileContainer} from "@/styles/global";
import {
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeaderCell,
    TableRow,
    TableWrapper
} from "@/components/ui/table";
import {CustomerDetail} from "@/components/dashboard/customers/customer-detail";
import {
    Card,
    CardFooter,
    CardHeader,
    CardSummary,
    CardSummaryItem,
    CardSummaryLabel,
    CardSummaryValue
} from "@/components/ui/card";


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
                            <TableHeaderCell as="th" scope="col">Customer</TableHeaderCell>
                            <TableHeaderCell as="th" scope="col">Email</TableHeaderCell>
                            <TableHeaderCell as="th" scope="col">Amount</TableHeaderCell>
                            <TableHeaderCell as="th" scope="col">Date</TableHeaderCell>
                            <TableHeaderCell as="th" scope="col">Status</TableHeaderCell>
                            <TableHeaderCell as="th" scope="col" className="relative">
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                    {invoices?.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell>
                                <CustomerDetail customer={{ name: invoice.name, image_url: invoice.image_url, email: invoice.email }} />
                                {/*<FlexContainer>*/}
                                {/*    <UserPhoto*/}
                                {/*        src={invoice.image_url}*/}
                                {/*        width={28}*/}
                                {/*        height={28}*/}
                                {/*        alt={`${invoice.name}'s profile picture`}*/}
                                {/*    />*/}
                                {/*    <p>{invoice.name}</p>*/}
                                {/*</FlexContainer>*/}
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
                    </TableBody>
                </Table>
                <MobileContainer>
                    {invoices?.map((invoice) => (
                        <Card key={invoice.id}>
                            <CardHeader>
                                <CustomerDetail customer={{ name: invoice.name, image_url: invoice.image_url, email: invoice.email }} />
                                <InvoiceStatus status={invoice.status}/>
                            </CardHeader>

                            <CardSummary>
                                <CardSummaryItem>
                                    <CardSummaryLabel>Amount</CardSummaryLabel>
                                    <CardSummaryValue>{formatCurrency(invoice.amount)}</CardSummaryValue>
                                </CardSummaryItem>
                                <CardSummaryItem>
                                    <CardSummaryLabel>Date</CardSummaryLabel>
                                    <CardSummaryValue>{formatDateToLocal(invoice.date)}</CardSummaryValue>
                                </CardSummaryItem>
                            </CardSummary>
                            <CardFooter>
                                <FlexEndContainer>
                                    <UpdateInvoice id={invoice.id}/>
                                    <DeleteInvoice id={invoice.id}/>
                                </FlexEndContainer>
                            </CardFooter>
                        </Card>
                    ))}
                </MobileContainer>

            </TableWrapper>
        </TableContainer>
    );
}