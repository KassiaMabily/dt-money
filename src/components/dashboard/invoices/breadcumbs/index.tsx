// Breadcrumbs.tsx
import {BreadcrumbItem, BreadcrumbList, LinkItem, Nav, Separator} from './styles';

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
                    <BreadcrumbItem key={breadcrumb.href} $active={breadcrumb.active}>
                        <LinkItem href={breadcrumb.href}>{breadcrumb.label}</LinkItem>
                        {index < breadcrumbs.length - 1 ? <Separator>/</Separator> : null}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Nav>
    );
}