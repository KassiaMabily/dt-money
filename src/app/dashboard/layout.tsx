import SideNav from "@/ui/dashboard/sidenav";
import { ContentWrapper, LayoutContainer, SideNavWrapper } from './layout-styles';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <SideNavWrapper>
                <SideNav />
            </SideNavWrapper>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </LayoutContainer>
    );
}
