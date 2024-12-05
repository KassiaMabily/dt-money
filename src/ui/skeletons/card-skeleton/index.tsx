import {SkeletonIcon, SkeletonText} from "@/ui/skeletons/styles";
import {CardSkeletonContainer, CardSkeletonContent, CardSkeletonHeader} from "@/ui/skeletons/card-skeleton/styles";

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