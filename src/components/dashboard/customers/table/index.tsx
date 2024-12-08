

import {fetchFilteredCustomers} from "@/lib/data";
import {
    Table,
    TableBody, TableCell,
    TableContainer,
    TableHead,
    TableHeaderCell,
    TableRow,
    TableWrapper
} from "@/components/ui/table";
import {
    Card,
    CardFooter,
    CardHeader,
    CardSummary,
    CardSummaryItem,
    CardSummaryLabel,
    CardSummaryValue
} from "@/components/ui/card";
import {MobileContainer} from "@/styles/global";
import {CustomerDetail} from "@/components/dashboard/customers/customer-detail";


export default async function CustomersTable({
                                                 query,
                                                 currentPage,
                                             }: {
    query: string;
    currentPage: number;
}) {
    const customers = await fetchFilteredCustomers(query, currentPage);

    return (
        <TableContainer>
            <TableWrapper>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">Name</TableHeaderCell>
                            <TableHeaderCell scope="col">Email</TableHeaderCell>
                            <TableHeaderCell scope="col">Total Invoices</TableHeaderCell>
                            <TableHeaderCell scope="col">Total Pending</TableHeaderCell>
                            <TableHeaderCell scope="col">Total Paid</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.id} className="group">
                                <TableCell>
                                    <CustomerDetail customer={customer} />
                                </TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.total_invoices}</TableCell>
                                <TableCell>{customer.total_pending}</TableCell>
                                <TableCell>{customer.total_paid}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <MobileContainer>
                    {customers?.map((customer) => (
                        <Card key={customer.id}>
                            <CardHeader>
                                <CustomerDetail customer={customer} />
                            </CardHeader>
                            <CardSummary>
                                <CardSummaryItem>
                                    <CardSummaryLabel>Pending</CardSummaryLabel>
                                    <CardSummaryValue>{customer.total_pending}</CardSummaryValue>
                                </CardSummaryItem>
                                <CardSummaryItem>
                                    <CardSummaryLabel>Paid</CardSummaryLabel>
                                    <CardSummaryValue>{customer.total_paid}</CardSummaryValue>
                                </CardSummaryItem>
                            </CardSummary>
                            <CardFooter>
                                <p>{customer.total_invoices} invoices</p>
                            </CardFooter>
                        </Card>
                    ))}
                </MobileContainer>



            </TableWrapper>
        </TableContainer>
    );
}
