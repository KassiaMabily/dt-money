import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import { ContentWrapper, Header, HeroImage, HeroSection, InfoBox, LoginContainer, StyledLink, Text } from './styles';

export default function Page() {
    return (
        <LoginContainer>
            <Header>
                <Image
                    src="/logo.svg"
                    width={180}
                    height={45}
                    alt="DT Money logo"
                />
            </Header>
            <ContentWrapper>
                <InfoBox>
                    <Text>
                        <strong>Welcome to DT Money.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/">
                            Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </Text>
                    <StyledLink href="/login">
                        Log in <ArrowRightIcon />
                    </StyledLink>
                </InfoBox>
                <HeroSection>
                    <HeroImage
                        src="/hero-desktop.png"
                        width={500}
                        height={380}
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                </HeroSection>
            </ContentWrapper>
        </LoginContainer>
    );
}
