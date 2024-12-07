"use client"
import {Input, Label, SearchContainer, StyledMagnifyingGlassIcon} from "@/ui/search/styles";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

export default function Search({placeholder}: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <SearchContainer>
            <Label htmlFor="search">Search</Label>
            <Input
                id="search"
                className="peer"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <StyledMagnifyingGlassIcon/>
        </SearchContainer>
    );
}