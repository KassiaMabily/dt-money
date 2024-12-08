
import Image from "next/image";
import {Container, LoginContainer, Header, LogoContainer} from "@/app/login/styles";
import LoginForm from "@/components/login-form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return (
        <LoginContainer>
            <Container>
                <Header>
                    <LogoContainer>
                        <Image
                            src="/logo.svg"
                            width={180}
                            height={45}
                            alt="DT Money logo"
                            priority
                        />
                    </LogoContainer>
                </Header>
                <LoginForm />
            </Container>
        </LoginContainer>
    );
}