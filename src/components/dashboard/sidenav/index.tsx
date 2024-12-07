"use client"

import NavLinks from '@/components/dashboard/nav-links';
import {PowerIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {
    LogoContainer,
    LogoLink,
    NavLinksContainer,
    SideNavContainer,
    SignOutButton,
    SignOutIcon,
    SignOutText,
    Spacer,
} from './styles';

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
                <SignOutButton type="submit">
                    <SignOutIcon as={PowerIcon}/>
                    <SignOutText>Sign Out</SignOutText>
                </SignOutButton>
            </NavLinksContainer>
        </SideNavContainer>
    );
}
