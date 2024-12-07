import Search from 'src/components/search';
import {CreateInvoice} from '@/components/dashboard/invoices/buttons';
import {Container, Header, PaginationWrapper, SearchBar, Title} from "@/app/dashboard/invoices/styles";
import React, {Suspense} from "react";
import InvoicesTable from "@/components/dashboard/invoices/table";
import {InvoicesTableSkeleton} from "@/components/ui/skeletons";
import {fetchInvoicesPages} from "@/lib/data";
import Pagination from "@/components/dashboard/invoices/pagination";


export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);

    return (
        <Container>
            <Header>
                <Title>Invoices</Title>
            </Header>
            <SearchBar>
                <Search placeholder="Search invoices..."/>
                <CreateInvoice/>
            </SearchBar>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                {/* @ts-expect-error Server Component */}
                <InvoicesTable query={query} currentPage={currentPage}/>
            </Suspense>
            <PaginationWrapper>
                <Pagination totalPages={totalPages}/>
            </PaginationWrapper>
        </Container>
    );
}