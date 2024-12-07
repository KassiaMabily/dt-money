// Breadcrumbs.tsx
import Link from 'next/link';
import {BreadcrumbItem, BreadcrumbList, Nav, Separator} from './styles';

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

export default function Breadcrumbs({
                                        breadcrumbs,
                                    }: {
    breadcrumbs: Breadcrumb[];
}) {
    return (
        <Nav>
            <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                    <BreadcrumbItem key={breadcrumb.href} active={breadcrumb.active}>
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                        {index < breadcrumbs.length - 1 ? <Separator>/</Separator> : null}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Nav>
    );
}