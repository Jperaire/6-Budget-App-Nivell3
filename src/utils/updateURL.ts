import { useNavigate } from "react-router-dom";

interface Selections {
    [key: string]: boolean;
}

export const updateURL = (
    navigate: ReturnType<typeof useNavigate>,
    selections: Selections,
    pages: number,
    languages: number,
    discount: boolean
) => {
    const queryParams = new URLSearchParams();

    queryParams.set("seo", selections.Seo ? "true" : "false");
    queryParams.set("ads", selections.Ads ? "true" : "false");
    queryParams.set("web", selections.Web ? "true" : "false");
    queryParams.set("pages", pages.toString());
    queryParams.set("languages", languages.toString());
    queryParams.set("discount", discount ? "true" : "false");

    navigate(`/budget?${queryParams.toString()}`);
};
