import SideNav from "@/components/dashboard/sidenav";
import {ContentWrapper, LayoutContainer, SideNavWrapper} from './layout-styles';

export const experimental_ppr = true;

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <SideNavWrapper>
                <SideNav/>
            </SideNavWrapper>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </LayoutContainer>
    );
}
