import { Dispatch, SetStateAction } from "react";

interface Selections {
    [key: string]: boolean;
}

interface ResetFormArgs {
    setSelections: Dispatch<SetStateAction<Selections>>;
    setPages: Dispatch<SetStateAction<number>>;
    setLanguages: Dispatch<SetStateAction<number>>;
}

export const resetForm = ({
    setSelections,
    setPages,
    setLanguages,
}: ResetFormArgs) => {
    setSelections({
        Seo: false,
        Ads: false,
        Web: false,
    });
    setPages(1);
    setLanguages(1);
};
