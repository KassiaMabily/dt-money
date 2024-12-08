import NavLinks from '@/components/dashboard/nav-links';
import {PowerIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {
    LogoContainer,
    LogoLink,
    NavLinksContainer,
    SideNavContainer,
    SignOutButton,
    SignOutText,
    Spacer,
} from './styles';
import { signOut } from '@/auth';
import {StyledIcon} from "@/components/ui/icon";

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
                        <StyledIcon>
                            <PowerIcon/>
                        </StyledIcon>
                        <SignOutText>Sign Out</SignOutText>
                    </SignOutButton>
                </form>
            </NavLinksContainer>
        </SideNavContainer>
);
}
