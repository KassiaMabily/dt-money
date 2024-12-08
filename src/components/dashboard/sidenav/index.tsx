import NavLinks from '@/components/dashboard/nav-links';
import {PowerIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {
    LogoContainer,
    LogoLink,
    NavLinksContainer,
    SideNavContainer, SignOutButton,
    Spacer,
} from './styles';
import { signOut } from '@/auth';
import {LinkIcon, LinkText} from "@/components/dashboard/nav-links/styles";

export default function SideNav() {
    return (
        <SideNavContainer>
            <LogoLink href="/public">
                <LogoContainer>
                    <Image
                        src="/logo.svg"
                        width={180}
                        height={45}
                        alt="DT Money logo"
                        priority
                    />
                </LogoContainer>
            </LogoLink>
            <NavLinksContainer>
                <NavLinks/>
                <Spacer/>
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                >
                    <SignOutButton type="submit">
                        <LinkIcon>
                            <PowerIcon />
                        </LinkIcon>
                        <LinkText>Sign Out</LinkText>
                    </SignOutButton>
                </form>
            </NavLinksContainer>
        </SideNavContainer>
);
}
