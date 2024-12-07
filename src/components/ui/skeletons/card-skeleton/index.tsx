import {SkeletonIcon, SkeletonText} from "@/components/ui/skeletons/styles";
import {
    CardSkeletonContainer,
    CardSkeletonContent,
    CardSkeletonHeader
} from "@/components/ui/skeletons/card-skeleton/styles";

export function CardSkeleton() {
    return (
        <CardSkeletonContainer>
            <CardSkeletonHeader>
                <SkeletonText/>
                <SkeletonIcon/>
            </CardSkeletonHeader>

            <CardSkeletonContent>
                {/*<SkeletonValue/>*/}
            </CardSkeletonContent>
        </CardSkeletonContainer>
    );
}