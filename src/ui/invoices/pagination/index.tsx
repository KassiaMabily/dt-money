"use client";
import Link from 'next/link';
import {generatePagination} from '@/lib/utils';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    PaginationArrowContainer,
    PaginationContainer,
    PaginationContent,
    PaginationNumberContainer
} from "@/ui/invoices/pagination/styles";
import {usePathname, useSearchParams} from "next/navigation";

export default function Pagination({totalPages}: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const allPages = generatePagination(currentPage, totalPages);

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <PaginationContainer>
            <PaginationArrow
                direction="left"
                href={createPageURL(currentPage - 1)}
                isDisabled={currentPage <= 1}
            />

            <PaginationContent>
                {allPages.map((page, index) => {
                    let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                    if (index === 0) position = 'first';
                    if (index === allPages.length - 1) position = 'last';
                    if (allPages.length === 1) position = 'single';
                    if (page === '...') position = 'middle';

                    return (
                        <PaginationNumber
                            key={page}
                            href={createPageURL(page)}
                            page={page}
                            position={position}
                            isActive={currentPage === page}
                        />
                    );
                })}
            </PaginationContent>

            <PaginationArrow
                direction="right"
                href={createPageURL(currentPage + 1)}
                isDisabled={currentPage >= totalPages}
            />
        </PaginationContainer>
    );
}

function PaginationNumber({
                              page,
                              href,
                              isActive,
                              position,
                          }: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
}) {
    return isActive || position === 'middle' ? (
        <PaginationNumberContainer $isActive={isActive} $position={position}>
            {page}
        </PaginationNumberContainer>
    ) : (
        <Link href={href}>
            <PaginationNumberContainer $isActive={isActive} $position={position}>
                {page}
            </PaginationNumberContainer>
        </Link>
    );
}

function PaginationArrow({
                             href,
                             direction,
                             isDisabled,
                         }: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
}) {
    const icon =
        direction === 'left' ? (
            <ArrowLeftIcon/>
        ) : (
            <ArrowRightIcon/>
        );

    return isDisabled ? (
        <PaginationArrowContainer $isDisabled={isDisabled} $direction={direction}>
            {icon}
        </PaginationArrowContainer>
    ) : (
        <Link href={href}>
            <PaginationArrowContainer $direction={direction}>
                {icon}
            </PaginationArrowContainer>
        </Link>
    );
}
