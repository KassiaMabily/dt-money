import Search from 'src/components/search';
import {Container, Header, PaginationWrapper, SearchBar, Title} from "@/app/dashboard/invoices/styles";
import React, {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/components/ui/skeletons";
import {fetchCustomersPages} from "@/lib/data";
import Pagination from "@/components/dashboard/invoices/pagination";
import {Metadata} from "next";
import CustomersTable from "@/components/dashboard/customers/table";

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchCustomersPages(query);

    return (
        <Container>
            <Header>
                <Title>Customers</Title>
            </Header>
            <SearchBar>
                <Search placeholder="Search customers..."/>
            </SearchBar>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                {/* // @ts-expect-error Server Component */}
                <CustomersTable query={query} currentPage={currentPage}/>
            </Suspense>
            <PaginationWrapper>
                <Pagination totalPages={totalPages}/>
            </PaginationWrapper>
        </Container>
    );
}