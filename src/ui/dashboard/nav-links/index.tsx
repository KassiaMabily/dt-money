"use client"

import {
    DocumentDuplicateIcon,
    HomeIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { LinkIcon, LinkText, NavLink } from './styles';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: DocumentDuplicateIcon,
    },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIconComponent = link.icon;
                return (
                    <NavLink key={link.name} href={link.href} $active={pathname === link.href}>
                        <LinkIcon as={LinkIconComponent} />
                        <LinkText>{link.name}</LinkText>
                    </NavLink>
                );
            })}
        </>
    );
}
