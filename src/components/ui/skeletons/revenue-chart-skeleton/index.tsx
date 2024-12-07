import {
    SkeletonFooter,
    SkeletonFooterIcon,
    SkeletonFooterText,
    SkeletonHeader,
    SkeletonMainContainer,
    SkeletonMainContent
} from "../styles";
import {RevenueChartSkeletonGrid} from "./styles";

export function RevenueChartSkeleton() {
    return (
        <SkeletonMainContainer>
            <SkeletonHeader/>
            <SkeletonMainContent>
                <RevenueChartSkeletonGrid/>
                <SkeletonFooter>
                    <SkeletonFooterIcon/>
                    <SkeletonFooterText/>
                </SkeletonFooter>
            </SkeletonMainContent>
        </SkeletonMainContainer>
    );
}
